import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  TextInput,
  SimpleForm,
  Edit,
  Create,
  EditButton,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  ImageField,
  ImageInput,
} from 'react-admin';

export const ProjectList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ReferenceField source="categoryId" reference="categories">
        <TextField source="title" />
      </ReferenceField>
      <ImageField source="images" src="url" title="images" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="description" multiline fullWidth />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ImageInput source="images" label="Upload images" accept="image/*" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="description" multiline fullWidth />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ImageInput source="images" label="Upload images" accept="image/*" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
