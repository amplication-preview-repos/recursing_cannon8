import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TelegramSubscriptionService } from "./telegramSubscription.service";
import { TelegramSubscriptionControllerBase } from "./base/telegramSubscription.controller.base";

@swagger.ApiTags("telegramSubscriptions")
@common.Controller("telegramSubscriptions")
export class TelegramSubscriptionController extends TelegramSubscriptionControllerBase {
  constructor(protected readonly service: TelegramSubscriptionService) {
    super(service);
  }
}
