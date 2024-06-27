import { TradingSignalWhereInput } from "./TradingSignalWhereInput";
import { TradingSignalOrderByInput } from "./TradingSignalOrderByInput";

export type TradingSignalFindManyArgs = {
  where?: TradingSignalWhereInput;
  orderBy?: Array<TradingSignalOrderByInput>;
  skip?: number;
  take?: number;
};
