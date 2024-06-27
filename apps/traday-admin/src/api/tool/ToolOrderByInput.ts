import { SortOrder } from "../../util/SortOrder";

export type ToolOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
