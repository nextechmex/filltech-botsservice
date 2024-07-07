import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  image?: InputJsonValue;
  video?: InputJsonValue;
};
