import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('src/data');

export const readData = (resource) => {
  const file = path.join(dataDir, `${resource}.json`);
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, 'utf-8');
  return JSON.parse(raw);
};

export const writeData = (resource, data) => {
  const file = path.join(dataDir, `${resource}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};
