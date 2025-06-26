import { BaseCategoryName, TransactionCategory } from "@/types/transaction";
import baseCategoriesNames from "@/constants/baseCategoryName";
import { categoriesDB } from "@/sampleDB/categories";

export const validatedTransactionCategory = (
  transactionCategory: TransactionCategory
) => {
  if (
    baseCategoriesNames.includes(transactionCategory.categoryId as BaseCategoryName)
  ) {
    throw new Error("bawal direct category gamitin, dapat sub category lang");
  }
  if (!categoriesDB.some((a) => a.name === transactionCategory.categoryId)) {
    throw new Error("non existing yung category name na ginamit");
  }
  return transactionCategory;
};
