import { categoriesDB } from "@/sampleDB/categories";
import { DataBase, TransactionCategory } from "@/types/transaction";
import { validatedCategory } from "@/validations/validatedCategory";
import { validatedTransactionCategory } from "@/validations/ValidatedTransactionCategory";
import { validateTransaction } from "@/validations/validateTransaction";

export const output = validatedCategory({
  name: "Cash on hand",
  parent: "Asset",
});

export const TestAll = () => {
  const dataBase: DataBase = {
    categories: categoriesDB,
    transactionCategories: [] as TransactionCategory[],
  };

  dataBase.categories.push(
    validatedCategory({
      name: "Cash on hand",
      parent: "Asset",
    })
  );

  dataBase.categories.push(
    validatedCategory({
      name: "Bank",
      parent: "Cash on hand",
    })
  );

  dataBase.categories.push(
    validatedCategory({
      name: "Invested Capital",
      parent: "Equity",
    })
  );

  const catA = validatedTransactionCategory({
    categoryId: "Bank",
    amount: 3000,
  });
  const catB = validatedTransactionCategory({
    categoryId: "Invested Capital",
    amount: 3000,
  });

  const tranA = [catA, catB];

  const validTranA = validateTransaction(tranA);

  dataBase.transactionCategories.push(validTranA[0], validTranA[1]);
  // mag add ng new sub categories gamit yung validatedCategory na function, tapos i add sa database.categories

  return dataBase;
};
