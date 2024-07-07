import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotUpdateInput = {
  description?: string | null;
  name?: string | null;
  ownerId?: string | null;
  user?: UserWhereUniqueInput | null;
};
