import { SortOrder } from "../../util/SortOrder";

export type TelegramSubscriptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  subscriptionDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
