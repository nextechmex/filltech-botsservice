import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SubscriptionPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
