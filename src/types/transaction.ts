export type Category = {
  id: string;
  name: string | BaseCategoryName;
  parent_id: string;
};
export type Transaction = {
  id: string;
  transaction_date: string;
  description: string;
  tags: string[];
  notes: string;
};
export type TransactionCategory = {
  id: string;
  transaction_id: string;
  category_id: string;
  name: string;
  amount: number;
};

export type BaseCategoryName =
  | "Asset"
  | "Revenue"
  | "Expenses"
  | "Liabilities"
  | "Equity";

export type DataBase = {
  categories: Category[];
  transactionCategories: TransactionCategory[];
  transactions: Transaction[];
};
