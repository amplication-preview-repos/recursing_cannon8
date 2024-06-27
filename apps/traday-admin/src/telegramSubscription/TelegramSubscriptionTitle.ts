import { TelegramSubscription as TTelegramSubscription } from "../api/telegramSubscription/TelegramSubscription";

export const TELEGRAMSUBSCRIPTION_TITLE_FIELD = "id";

export const TelegramSubscriptionTitle = (
  record: TTelegramSubscription
): string => {
  return record.id?.toString() || String(record.id);
};
