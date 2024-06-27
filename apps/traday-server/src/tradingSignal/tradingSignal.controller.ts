import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradingSignalService } from "./tradingSignal.service";
import { TradingSignalControllerBase } from "./base/tradingSignal.controller.base";

@swagger.ApiTags("tradingSignals")
@common.Controller("tradingSignals")
export class TradingSignalController extends TradingSignalControllerBase {
  constructor(protected readonly service: TradingSignalService) {
    super(service);
  }
}
