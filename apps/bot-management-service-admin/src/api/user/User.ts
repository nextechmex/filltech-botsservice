import { JsonValue } from "type-fest";
import { Bot } from "../bot/Bot";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  bots?: Array<Bot>;
};
