import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TelegramSubscriptionListRelationFilter } from "../telegramSubscription/TelegramSubscriptionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  telegramSubscriptions?: TelegramSubscriptionListRelationFilter;
  username?: StringFilter;
};
