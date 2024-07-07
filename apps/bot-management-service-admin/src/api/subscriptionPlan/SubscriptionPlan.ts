export type SubscriptionPlan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  price: number | null;
  description: string | null;
};
