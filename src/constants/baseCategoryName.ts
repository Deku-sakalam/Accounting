import { handleize } from "@/app/lib/utilies/handleize";
import { BaseCategoryName } from "@/types/transaction";

const baseCategoriesNames: BaseCategoryName[] = [
  "Asset",
  "Equity",
  "Expenses",
  "Liabilities",
  "Revenue",
];

export const baseCategoryHandles = baseCategoriesNames.map((a) =>
  handleize(a)
);

export default baseCategoriesNames;
