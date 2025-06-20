import { Category } from "@/types/transaction";
import { categories } from "@/sampleDB/categories";

export const validatedCategory = (categoryData: Category) => {
  console.log("category data", categoryData);
  let exist = false;
  for (let i = 0; i < categories.length; i++) {
    console.log("categoriesg jgnh", categories[i].name, categoryData.parent);
    if (categories[i].name === categoryData.parent) {
      exist = true;
    }
  }
  if (!exist) {
    throw Error("hindi pwede dahil walang ganon");
  }
  return categoryData;
};
