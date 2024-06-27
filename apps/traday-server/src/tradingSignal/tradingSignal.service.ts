import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradingSignalServiceBase } from "./base/tradingSignal.service.base";

@Injectable()
export class TradingSignalService extends TradingSignalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
