import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Create,
  SimpleForm,
  TextInput,
  DeleteButton,
} from 'react-admin';

// Список заявок
export const BeratungList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Имя" />
      <EmailField source="email" label="Email" />
      <TextField source="phoneNumber" label="Телефон" />
      <TextField source="service" label="Услуга" />
      <TextField source="nachricht" label="Сообщение" />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Создание заявки
export const BeratungCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Имя" />
      <TextInput source="email" label="Email" />
      <TextInput source="phoneNumber" label="Телефон" />
      <TextInput source="service" label="Услуга" />
      <TextInput source="nachricht" label="Сообщение" multiline fullWidth />
    </SimpleForm>
  </Create>
);
