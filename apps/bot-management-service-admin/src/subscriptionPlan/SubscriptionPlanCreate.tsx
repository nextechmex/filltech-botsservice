import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SubscriptionPlanCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
