import { InputJsonValue } from "../../types";
import { BotUpdateManyWithoutUsersInput } from "./BotUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  bots?: BotUpdateManyWithoutUsersInput;
};
