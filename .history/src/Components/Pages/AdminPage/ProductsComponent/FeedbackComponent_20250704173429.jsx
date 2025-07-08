import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  Edit,
  FunctionField,
} from 'react-admin';
import { handleSave, handleSaveWithImages } from '../JS/fileUploadUtils';
import uploadsConfig from '../../../../uploadsConfig';

// Вывод изображений
const RenderImages = ({ record }) =>
  Array.isArray(record?.images) && record.images.length ? (
    <>
      {record.images.map((img, i) => (
        <img
          key={i}
          src={img.includes('http') ? img : `${uploadsConfig}${img}`}
          alt={`img-${i}`}
          style={{ width: 60, marginRight: 8 }}
        />
      ))}
    </>
  ) : (
    'Нет изображений'
  );

// 📄 Список
export const FeedbackList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Имя" />
      <TextField source="description" label="Описание" />
      <FunctionField label="Изображения" render={RenderImages} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// ➕ Создание
export const FeedbackCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="name" label="Имя" />
      <TextInput source="description" multiline label="Описание" />
      <ImageInput source="img" label="Изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

// ✏️ Редактирование
export const FeedbackEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput source="name" label="Имя" />
      <TextInput source="description" multiline label="Описание" />

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
