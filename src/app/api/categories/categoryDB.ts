import supabase from "@/app/lib/supabase";
import { handleize } from "@/app/lib/utilies/handleize";
import { Category } from "@/types/transaction";

export const CategoryDB = {
  create: async (input: Category) => {
    return await supabase.from("categories").insert(input).select();
  },
  getAll: async (name?: string) => {
    let query = supabase.from("categories").select();
    if (name) {
      query = query.eq("handle", handleize(name));
    }
    return await query;
  },
  getByID: async (id: string) => {
    return await supabase.from("categories").select().eq("id", id).single();
  },
  update: async (id: string, newData: Partial<Category>) => {
    return await supabase
      .from("categories")
      .update(newData)
      .eq("id", id)
      .select();
  },
  delete: async (id: string) => {
    return await supabase.from("categories").delete().eq("id", id);
  },
};
