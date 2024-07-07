import { InputJsonValue } from "../../types";
import { BotCreateNestedManyWithoutUsersInput } from "./BotCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  bots?: BotCreateNestedManyWithoutUsersInput;
};
