import * as graphql from "@nestjs/graphql";
import { TelegramSubscriptionResolverBase } from "./base/telegramSubscription.resolver.base";
import { TelegramSubscription } from "./base/TelegramSubscription";
import { TelegramSubscriptionService } from "./telegramSubscription.service";

@graphql.Resolver(() => TelegramSubscription)
export class TelegramSubscriptionResolver extends TelegramSubscriptionResolverBase {
  constructor(protected readonly service: TelegramSubscriptionService) {
    super(service);
  }
}
