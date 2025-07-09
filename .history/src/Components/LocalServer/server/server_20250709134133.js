import express from 'express';
import cors from 'cors';
import { readData, writeData } from './saveData.js';
import { upload } from './upload.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('public/uploads'));

app.get('/:resource', (req, res) => {
  const data = readData(req.params.resource);
  res.json(data);
});

app.post('/:resource', (req, res) => {
  const data = readData(req.params.resource);
  const newItem = { ...req.body, id: Date.now() };
  data.push(newItem);
  writeData(req.params.resource, data);
  res.json(newItem);
});

app.put('/:resource/:id', (req, res) => {
  const data = readData(req.params.resource);
  const index = data.findIndex((i) => i.id == req.params.id);
  data[index] = { ...req.body, id: Number(req.params.id) };
  writeData(req.params.resource, data);
  res.json(data[index]);
});

app.delete('/:resource/:id', (req, res) => {
  const data = readData(req.params.resource);
  const filtered = data.filter((i) => i.id != req.params.id);
  writeData(req.params.resource, filtered);
  res.json({ success: true });
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: `/uploads/${req.file.filename}` });
});

app.listen(4000, () => {
  console.log('🟢 Local API on http://localhost:4000');
});
