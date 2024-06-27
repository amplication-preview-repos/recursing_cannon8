import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TelegramSubscriptionWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  subscriptionDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
