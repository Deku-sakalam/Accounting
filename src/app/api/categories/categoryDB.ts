import supabase from "@/app/lib/supabase";
import { handleize } from "@/app/lib/utilies/handleize";

export const CategoryDB = {
  create: async (input: string) => {
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
    return await supabase.from("categories").select().eq("id", id);
  },
};
