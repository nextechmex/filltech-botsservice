import { SortOrder } from "../../util/SortOrder";

export type SubscriptionPlanOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  description?: SortOrder;
};
