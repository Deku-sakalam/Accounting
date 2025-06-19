import { Transaction } from "@/types/transaction";
import { sum } from "./sum";

export const validateTransaction = (transaction: Transaction) => {
  const totalDebits = [];

  const totalCredits = [];
  for (let i = 0; i < transaction.length; i++) {
    if (transaction[i].name === "debit") {
      totalDebits.push(transaction[i].amount);
    }
    if (transaction[i].name === "credit") {
      totalCredits.push(transaction[i].amount);
    }
  }
  if (sum(totalDebits) != sum(totalCredits)) {
    return false;
  }
  return true;
};
