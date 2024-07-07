import { User } from "../user/User";

export type Bot = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  ownerId: string | null;
  user?: User | null;
};
