import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from 'react-admin';
import { handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';

// Список отзывов
export const FeedbackList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Имя" />
      <TextField source="description" label="Описание" />

      <FunctionField
        label="Изображения"
        render={(record) =>
          record.images && record.images.length ? record.images.join(', ') : '—'
        }
      />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Создание отзыва
export const FeedbackCreate = (props) => (
  <Create {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="name" label="Имя" fullWidth />
      <TextInput source="description" label="Описание" fullWidth />

      <ImageInput
        source="imagesRaw"
        label="Изображения"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

// Редактирование отзыва
export const FeedbackEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="name" label="Имя" fullWidth />
      <TextInput source="description" label="Описание" fullWidth />

      <ImageInput
        source="imagesRaw"
        label="Новые изображения"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      <ImageInput
        source="images"
        label="Старые изображения"
        multiple
        accept="image/*"
        format={(value) =>
          value && value.length
            ? value.map((src) => ({
                src: src.startsWith('http') ? src : `${uploadsConfig}${src}`,
                title: src,
              }))
            : []
        }
        parse={(value) =>
          value.map((file) =>
            file.rawFile
              ? file.rawFile
              : file.src.replace(`${uploadsConfig}`, '')
          )
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
