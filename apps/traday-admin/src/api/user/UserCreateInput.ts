import { InputJsonValue } from "../../types";
import { TelegramSubscriptionCreateNestedManyWithoutUsersInput } from "./TelegramSubscriptionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  telegramSubscriptions?: TelegramSubscriptionCreateNestedManyWithoutUsersInput;
  username: string;
};
