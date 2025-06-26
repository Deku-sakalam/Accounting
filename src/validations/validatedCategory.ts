import { Category } from "@/types/transaction";
import { categoriesDB } from "@/sampleDB/categories";

export const validatedCategory = (categoryData: Category) => {
  let exist = false;
  for (let i = 0; i < categoriesDB.length; i++) {
    if (categoriesDB[i].name === categoryData.parent) {
      exist = true;
    }
  }
  if (!exist) {
    throw Error(`hindi nag eexist yung ${categoryData.parent} sa categories`);
  }
  return categoryData;
};
