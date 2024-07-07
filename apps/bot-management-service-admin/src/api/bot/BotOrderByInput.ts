import { SortOrder } from "../../util/SortOrder";

export type BotOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  userId?: SortOrder;
};
