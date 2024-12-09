import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TelegramSubscriptionServiceBase } from "./base/telegramSubscription.service.base";

@Injectable()
export class TelegramSubscriptionService extends TelegramSubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
