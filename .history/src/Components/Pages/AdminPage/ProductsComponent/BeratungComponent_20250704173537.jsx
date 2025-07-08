import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  Create,
  SimpleForm,
  TextInput,
  DeleteButton,
} from 'react-admin';

// 📄 Список заявок
export const BeratungList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Имя" />
      <EmailField source="email" label="Email" />
      <TextField source="message" label="Сообщение" />
      <DateField source="createdAt" label="Создано" showTime />
      <DeleteButton />
    </Datagrid>
  </List>
);

// ➕ Форма создания
export const BeratungCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Имя" />
      <TextInput source="email" label="Email" />
      <TextInput source="message" label="Сообщение" multiline />
    </SimpleForm>
  </Create>
);
