import { Transaction } from "@/types/transaction";
export const validateTransaction = (transaction: Transaction) => {
  let totalRevenue = 0;
  let totalExpenses = 0;
  let totalEquity = 0;
  let totalLiabilities = 0;
  let totalAsset = 0;

  for (let i = 0; i < transaction.length; i++) {
    if (transaction[i].name === "Revenue") {
      totalRevenue += transaction[i].amount;
    }
    if (transaction[i].name === "Expenses") {
      totalExpenses += transaction[i].amount;
    }
    if (transaction[i].name === "Equity") {
      totalEquity += transaction[i].amount;
    }
    if (transaction[i].name === "Liabilities") {
      totalLiabilities += transaction[i].amount;
    }
    if (transaction[i].name === "Asset") {
      totalAsset += transaction[i].amount;
    }
  }
  // retained income = (revenue - expenses)
  const retainedIncome = totalRevenue - totalExpenses;
  const finalEquity = retainedIncome + totalEquity;
  if (finalEquity + totalLiabilities !== totalAsset) {
    throw new Error("hindi balance");
  }
  return transaction;
};
