import { categoriesDB } from "@/sampleDB/categories";
import { Category, Transaction } from "@/types/transaction";

export const findCategory = (currentCategoryName: string): Category => {
  let cat = null;
  for (let i = 0; i < categoriesDB.length; i++) {
    if (currentCategoryName === categoriesDB[i].name) {
      cat = categoriesDB[i];
    }
  }
  if (!cat) {
    throw Error("hindi mahanap ang category");
  }
  if (cat.parent != null) {
    cat = findCategory(cat.parent);
  }
  return cat;
};

export const validateTransaction = (transaction: Transaction) => {
  let totalRevenue = 0;
  let totalExpenses = 0;
  let totalEquity = 0;
  let totalLiabilities = 0;
  let totalAsset = 0;

  for (let i = 0; i < transaction.length; i++) {
    const currentCategoryName = transaction[i].categoryId;
    const currentCategory = findCategory(currentCategoryName);
    const baseCategoriesNames = currentCategory?.parent;

    if (baseCategoriesNames === "Revenue") {
      totalRevenue += transaction[i].amount;
    }
    if (baseCategoriesNames === "Expenses") {
      totalExpenses += transaction[i].amount;
    }
    if (baseCategoriesNames === "Equity") {
      totalEquity += transaction[i].amount;
    }
    if (baseCategoriesNames === "Liabilities") {
      totalLiabilities += transaction[i].amount;
    }
    if (baseCategoriesNames === "Asset") {
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
