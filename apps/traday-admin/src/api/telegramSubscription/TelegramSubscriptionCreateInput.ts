import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TelegramSubscriptionCreateInput = {
  isActive?: boolean | null;
  subscriptionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
