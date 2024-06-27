import { JsonValue } from "type-fest";
import { TelegramSubscription } from "../telegramSubscription/TelegramSubscription";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  telegramSubscriptions?: Array<TelegramSubscription>;
  updatedAt: Date;
  username: string;
};
