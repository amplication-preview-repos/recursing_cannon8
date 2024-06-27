import { TelegramSubscriptionWhereInput } from "./TelegramSubscriptionWhereInput";
import { TelegramSubscriptionOrderByInput } from "./TelegramSubscriptionOrderByInput";

export type TelegramSubscriptionFindManyArgs = {
  where?: TelegramSubscriptionWhereInput;
  orderBy?: Array<TelegramSubscriptionOrderByInput>;
  skip?: number;
  take?: number;
};
