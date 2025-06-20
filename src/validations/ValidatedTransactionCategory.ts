import { BaseCategoryName, TransactionCategory } from "@/types/transaction";
import baseCategoriesNames from "@/constants/baseCategoryName";
import { categories } from "@/sampleDB/categories";

export const validatedTransactionCategory = (
  transactionCategory: TransactionCategory
) => {
  if (
    baseCategoriesNames.includes(transactionCategory.name as BaseCategoryName)
  ) {
    throw new Error("bawal direct category gamitin, dapat sub category lang");
  }
  if (!categories.some((a) => a.name === transactionCategory.name)) {
    throw new Error("non existing yung category name na ginamit");
  }
  return transactionCategory;
};
