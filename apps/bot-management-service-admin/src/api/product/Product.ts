import { JsonValue } from "type-fest";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  image: JsonValue;
  video: JsonValue;
};
