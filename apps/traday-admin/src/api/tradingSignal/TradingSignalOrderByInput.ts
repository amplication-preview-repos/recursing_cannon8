import { SortOrder } from "../../util/SortOrder";

export type TradingSignalOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
