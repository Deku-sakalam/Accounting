import { validatedCategory } from "@/validations/validatedCategory";

export type Category = {
  name: string;
  parent: string | null | BaseCategoryName;
};
export type TransactionCategory = {
  name: string;
  amount: number;
};
export type Transaction = TransactionCategory[];

export type BaseCategoryName =
  | "Asset"
  | "Revenue"
  | "Expenses"
  | "Liabilities"
  | "Equity";

export const output = validatedCategory({
  name: "Cash on hand",
  parent: "Assets",
});
