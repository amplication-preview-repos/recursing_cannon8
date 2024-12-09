import { InputJsonValue } from "../../types";
import { TelegramSubscriptionUpdateManyWithoutUsersInput } from "./TelegramSubscriptionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  telegramSubscriptions?: TelegramSubscriptionUpdateManyWithoutUsersInput;
  username?: string;
};
