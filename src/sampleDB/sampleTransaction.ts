import { Transaction } from "@/types/transaction";
import { validateTransaction } from "@/validations/validateTransaction";
import { validatedTransactionCategory } from "@/validations/ValidatedTransactionCategory";

export const sampleTransaction: Transaction = validateTransaction([
  validatedTransactionCategory({
    amount: 500 - 300 + 300 + 500 - 300,
    categoryId: "Asset",
  }),
  validatedTransactionCategory({
    amount: 500,
    categoryId: "Equity",
  }),
  validatedTransactionCategory({
    amount: 100,
    categoryId: "Liabilities",
  }),
  validatedTransactionCategory({
    amount: 100,
    categoryId: "Revenue",
  }),
  validatedTransactionCategory({
    amount: 0,
    categoryId: "Expenses",
  }),
]);
