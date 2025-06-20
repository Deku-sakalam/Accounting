import { Transaction } from "@/types/transaction";
import { validateTransaction } from "@/validations/validateTransaction";
import { validatedTransactionCategory } from "@/validations/ValidatedTransactionCategory";

export const sampleTransaction: Transaction = validateTransaction([
  validatedTransactionCategory({
    amount: 500 - 300 + 300 + 500 - 300,
    name: "Asset",
  }),
  validatedTransactionCategory({
    amount: 500,
    name: "Equity",
  }),
  validatedTransactionCategory({
    amount: 100,
    name: "Liabilities",
  }),
  validatedTransactionCategory({
    amount: 100,
    name: "Revenue",
  }),
  validatedTransactionCategory({
    amount: 0,
    name: "Expenses",
  }),
]);
