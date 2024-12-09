import { TradingSignal as TTradingSignal } from "../api/tradingSignal/TradingSignal";

export const TRADINGSIGNAL_TITLE_FIELD = "title";

export const TradingSignalTitle = (record: TTradingSignal): string => {
  return record.title?.toString() || String(record.id);
};
