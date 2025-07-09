// src/utils/fileUtils.js
import fs from 'fs';

export const saveData = (filename, data) => {
  fs.writeFile(
    `./src/data/${filename}`,
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) console.error('Ошибка при сохранении:', err);
    }
  );
};

export const loadData = (filename) => {
  try {
    const data = fs.readFileSync(`./src/data/${filename}`, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};
