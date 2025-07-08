import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageInput,
  ImageField,
  DateField,
  DateInput,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceField,
} from 'react-admin';
import { handleSave, uploadFile, uploadFiles } from '../JS/fileUploadUtils';
import { handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';
import RichTextInput from '../Auth/RichTextInput';

// Список проектов
export const ProjectList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Название" />
      <TextField source="description" label="Описание" />
      <ReferenceField
        source="categoryId"
        reference="categories"
        label="Категория"
      >
        <TextField source="title" />
      </ReferenceField>
      <ImageField source="images" label="Картинки" src="images[0]" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Создание проекта
export const ProjectCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="title" label="Название" fullWidth />
      <RichTextInput source="description" label="Описание" />
      <ReferenceInput
        source="categoryId"
        reference="categories"
        label="Категория"
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ImageInput
        source="images"
        label="Загрузить изображения"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

// Редактирование проекта
export const ProjectEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="title" label="Название" fullWidth />
      <RichTextInput source="description" label="Описание" />
      <ReferenceInput
        source="categoryId"
        reference="categories"
        label="Категория"
      >
        <SelectInput optionText="title" />
      </ReferenceInput>

      <ImageInput
        source="imagesRaw"
        label="Загрузить новые изображения"
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
            ? value.map((image) => ({
                src: image.includes('http')
                  ? image
                  : `${uploadsConfig}${image}`,
                title: image,
              }))
            : []
        }
        parse={(value) =>
          value.map((file) => {
            if (file.rawFile) {
              return file.rawFile;
            }
            return file.src.replace(`${uploadsConfig}`, '');
          })
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
