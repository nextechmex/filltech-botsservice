import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  image?: InputJsonValue;
  video?: InputJsonValue;
};
