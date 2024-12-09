import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const TradingSignalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
