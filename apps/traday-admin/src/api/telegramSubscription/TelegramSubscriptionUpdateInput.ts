import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TelegramSubscriptionUpdateInput = {
  isActive?: boolean | null;
  subscriptionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
