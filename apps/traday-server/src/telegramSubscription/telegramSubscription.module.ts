import { Module } from "@nestjs/common";
import { TelegramSubscriptionModuleBase } from "./base/telegramSubscription.module.base";
import { TelegramSubscriptionService } from "./telegramSubscription.service";
import { TelegramSubscriptionController } from "./telegramSubscription.controller";
import { TelegramSubscriptionResolver } from "./telegramSubscription.resolver";

@Module({
  imports: [TelegramSubscriptionModuleBase],
  controllers: [TelegramSubscriptionController],
  providers: [TelegramSubscriptionService, TelegramSubscriptionResolver],
  exports: [TelegramSubscriptionService],
})
export class TelegramSubscriptionModule {}
