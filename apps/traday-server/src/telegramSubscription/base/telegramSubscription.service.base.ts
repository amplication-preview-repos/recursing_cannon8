/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  TelegramSubscription as PrismaTelegramSubscription,
  User as PrismaUser,
} from "@prisma/client";

export class TelegramSubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TelegramSubscriptionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.telegramSubscription.count(args);
  }

  async telegramSubscriptions(
    args: Prisma.TelegramSubscriptionFindManyArgs
  ): Promise<PrismaTelegramSubscription[]> {
    return this.prisma.telegramSubscription.findMany(args);
  }
  async telegramSubscription(
    args: Prisma.TelegramSubscriptionFindUniqueArgs
  ): Promise<PrismaTelegramSubscription | null> {
    return this.prisma.telegramSubscription.findUnique(args);
  }
  async createTelegramSubscription(
    args: Prisma.TelegramSubscriptionCreateArgs
  ): Promise<PrismaTelegramSubscription> {
    return this.prisma.telegramSubscription.create(args);
  }
  async updateTelegramSubscription(
    args: Prisma.TelegramSubscriptionUpdateArgs
  ): Promise<PrismaTelegramSubscription> {
    return this.prisma.telegramSubscription.update(args);
  }
  async deleteTelegramSubscription(
    args: Prisma.TelegramSubscriptionDeleteArgs
  ): Promise<PrismaTelegramSubscription> {
    return this.prisma.telegramSubscription.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.telegramSubscription
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
