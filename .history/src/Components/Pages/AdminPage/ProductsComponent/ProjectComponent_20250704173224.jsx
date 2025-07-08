import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField,
  FunctionField,
} from 'react-admin';
import { handleSave, handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';

// Отображение названия категории
const CategoryTitle = ({ record }) =>
  record?.category?.title || 'Без категории';

// 📄 Список
export const ProjectList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Название" />
      <FunctionField label="Категория" render={CategoryTitle} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// ➕ Создание
export const ProjectCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <TextInput source="description" multiline label="Описание" />
      <ReferenceInput
        source="categoryId"
        reference="categories"
        label="Категория"
        perPage={100}
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ImageInput source="img" label="Изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

// ✏️ Редактирование
export const ProjectEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <TextInput source="description" multiline label="Описание" />
      <ReferenceInput
        source="categoryId"
        reference="categories"
        label="Категория"
        perPage={100}
      >
        <SelectInput optionText="title" />
      </ReferenceInput>

      {/* Новые изображения */}
      <ImageInput
        source="imagesRaw"
        label="Загрузить новые изображения"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      {/* Старые изображения */}
      <ImageInput
        source="img"
        label="Старые изображения"
        multiple
        accept="image/*"
        format={(value) =>
          Array.isArray(value)
            ? value.map((image) => ({
                src: image.includes('http')
                  ? image
                  : `${uploadsConfig}${image}`,
                title: image,
              }))
            : []
        }
        parse={(value) =>
          Array.isArray(value)
            ? value.map((file) =>
                file.rawFile
                  ? file.rawFile
                  : file.src.replace(`${uploadsConfig}`, '')
              )
            : []
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
