import Cookies from 'js-cookie';
import uploadsConfig from '../../../../uploadsConfig';
import serverConfig from '../../../../serverConfig';

const token = Cookies.get('token');

/** Универсальный парсер ответа upload-роута */
function extractPaths(json) {
  if (!json) return [];
  if (Array.isArray(json.filePaths)) return json.filePaths; // твой первый вариант
  if (Array.isArray(json.files))
    return json.files.map((f) => f.path).filter(Boolean); // роут из примера с image+video
  return [];
}

/** Нормализуем вход: RA-объект -> File, строку пропускаем */
function toFileArray(items = []) {
  return items
    .map((it) => {
      if (it instanceof File) return it;
      if (it?.rawFile instanceof File) return it.rawFile; // RA ImageInput/FileInput
      return null; // строки/URL пропускаем здесь — они обрабатываются как old media
    })
    .filter(Boolean);
}

/** Загрузка пачки файлов на единый эндпоинт (рекомендуется serverConfig/upload) */
export async function uploadAnyFiles(files) {
  const filesToSend = toFileArray(files);
  if (!filesToSend.length) return [];

  const fd = new FormData();
  filesToSend.forEach((f) => fd.append('files', f));

  const res = await fetch(`${serverConfig}/upload`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: fd,
  });

  if (!res.ok) {
    const t = await res.text().catch(() => '');
    throw new Error(`Upload failed: ${res.status} ${t}`);
  }

  const json = await res.json().catch(() => ({}));
  return extractPaths(json);
}

/** Старые утилы — оставим совместимость на случай, если где-то используются */
export const uploadFile = async (file) => {
  const fd = new FormData();
  fd.append('files', file); // выровняли поле
  const res = await fetch(`${serverConfig}/upload`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: fd,
  });
  const json = await res.json().catch(() => ({}));
  return extractPaths(json);
};

export const uploadFiles = async (files) => {
  // совместимость: принимает RA-объекты с rawFile
  return uploadAnyFiles(files);
};

/** Мерджим медиа (строки старых путей + новые загруженные) */
export async function updateMedia(existing = [], newFiles = []) {
  const oldPaths = (existing || []).filter((x) => typeof x === 'string');
  const uploaded = await uploadAnyFiles(newFiles);
  // уникализируем
  return Array.from(new Set([...oldPaths, ...uploaded]));
}

/** Единый transform для Create/Edit: поддерживает image+video, старые/новые */
export const handleSaveWithMedia = async (values) => {
  // поля:
  // values.images — уже сохранённые строки путей/URL
  // values.mediaRaw / imagesRaw — новые файлы (File | RA {rawFile})
  const newFiles = values.mediaRaw || values.imagesRaw || [];
  const merged = await updateMedia(values.images || [], newFiles);

  const payload = {
    ...values,
    images: merged,
  };

  // чистим временные поля
  delete payload.mediaRaw;
  delete payload.imagesRaw;

  return payload;
};

/** Для обратной совместимости, если где-то уже вызывается handleSaveWithImages */
export const handleSave = handleSaveWithMedia;
export const handleSaveWithImages = handleSaveWithMedia;
