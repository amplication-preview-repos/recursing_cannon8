import * as graphql from "@nestjs/graphql";
import { TradingSignalResolverBase } from "./base/tradingSignal.resolver.base";
import { TradingSignal } from "./base/TradingSignal";
import { TradingSignalService } from "./tradingSignal.service";

@graphql.Resolver(() => TradingSignal)
export class TradingSignalResolver extends TradingSignalResolverBase {
  constructor(protected readonly service: TradingSignalService) {
    super(service);
  }
}
