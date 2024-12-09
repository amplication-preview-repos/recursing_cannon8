import { Module } from "@nestjs/common";
import { TradingSignalModuleBase } from "./base/tradingSignal.module.base";
import { TradingSignalService } from "./tradingSignal.service";
import { TradingSignalController } from "./tradingSignal.controller";
import { TradingSignalResolver } from "./tradingSignal.resolver";

@Module({
  imports: [TradingSignalModuleBase],
  controllers: [TradingSignalController],
  providers: [TradingSignalService, TradingSignalResolver],
  exports: [TradingSignalService],
})
export class TradingSignalModule {}
