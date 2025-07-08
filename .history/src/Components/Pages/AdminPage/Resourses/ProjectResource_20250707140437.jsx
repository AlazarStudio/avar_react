import React, { useState } from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  useNotify,
  useRedirect,
  useRefresh,
  Toolbar,
  SaveButton,
  useRecordContext,
} from 'react-admin';

// 🔹 Список проектов
export const ProjectList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ReferenceField source="categoryId" reference="categories">
        <TextField source="title" />
      </ReferenceField>
      <ImageThumb />
      <EditButton />
    </Datagrid>
  </List>
);

const ImageThumb = ({ record }) => {
  if (!record?.images?.length) return null;
  return <img src={record.images[0]} alt="" style={{ height: 50 }} />;
};

// 🔹 Создание проекта
export const ProjectCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const refresh = useRefresh();
  const [files, setFiles] = useState([]);

  const handleSubmit = async (values) => {
    try {
      let uploaded = [];

      if (files.length) {
        const formData = new FormData();
        files.forEach((f) => formData.append('img', f));
        const res = await fetch('/uploads', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        uploaded = data.filePaths;
      }

      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, images: uploaded }),
      });

      notify('Проект создан');
      redirect('/projects');
      refresh();
    } catch (err) {
      console.error(err);
      notify('Ошибка при создании', { type: 'error' });
    }
  };

  return (
    <Create>
      <SimpleForm onSubmit={handleSubmit} toolbar={<Toolbar><SaveButton alwaysEnable /></Toolbar>}>
        <TextInput source="title" fullWidth />
        <TextInput source="description" multiline fullWidth />
        <ReferenceInput source="categoryId" reference="categories">
          <SelectInput optionText="title" />
        </ReferenceInput>
        <input type="file" multiple accept="image/*" onChange={(e) => setFiles([...e.target.files])} />
      </SimpleForm>
    </Create>
  );
};

// 🔹 Редактирование проекта
export const ProjectEdit = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const refresh = useRefresh();
  const [files, setFiles] = useState([]);

  const handleSubmit = async (values) => {
    try {
      let uploaded = [];

      if (files.length) {
        const formData = new FormData();
        files.forEach((f) => formData.append('img', f));
        const res = await fetch('/uploads', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        uploaded = data.filePaths;
      }

      await fetch(`/api/projects/${values.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          images: uploaded.length ? uploaded : values.images,
        }),
      });

      notify('Проект обновлён');
      redirect('/projects');
      refresh();
    } catch (err) {
      console.error(err);
      notify('Ошибка при обновлении', { type: 'error' });
    }
  };

  return (
    <Edit>
      <SimpleForm onSubmit={handleSubmit} toolbar={<Toolbar><SaveButton alwaysEnable /></Toolbar>}>
        <TextInput source="title" fullWidth />
        <TextInput source="description" multiline fullWidth />
        <ReferenceInput source="categoryId" reference="categories">
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ExistingImages />
        <input type="file" multiple accept="image/*" onChange={(e) => setFiles([...e.target.files])} />
      </SimpleForm>
    </Edit>
  );
};

const ExistingImages = () => {
  const record = useRecordContext();
  if (!record?.images?.length) return null;

  return (
    <div style={{ marginBottom: 16 }}>
      <strong>Существующие изображения:</strong>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {record.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            style={{ height: 80, borderRadius: 4, objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};
