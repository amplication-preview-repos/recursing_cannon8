import { User } from "../user/User";

export type TelegramSubscription = {
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  subscriptionDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
