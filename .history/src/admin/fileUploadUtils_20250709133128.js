// src/admin/JS/fileUploadUtils.js
export const handleSaveWithImages = async (data) => {
  const imagesRaw = data.imagesRaw || [];

  const uploaded = await Promise.all(
    imagesRaw.map(async (file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = () => {
          const base64 = reader.result;
          const filename = `${Date.now()}_${file.name}`;
          const filePath = `/uploads/${filename}`;
          fetch(filePath, {
            method: 'PUT',
            body: base64,
          }).then(() => resolve(filename));
        };
        reader.readAsDataURL(file.rawFile);
      });
    })
  );

  return {
    ...data,
    images: uploaded,
    imagesRaw: undefined,
  };
};
