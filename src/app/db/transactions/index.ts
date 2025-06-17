import supabase from "@/app/lib/supabase";


export const GetAll = async () => {
  return await supabase.from("transactions").select();
};
export const GetSingle = async (id: string) => {
  return await supabase.from("transactions").select().eq("id", id).single();
};

type Transaction = {
  amount :number
  sender_name: string
  receiver_name : string
  status: string
}
export const CreateTransaction = async (transaction:Transaction) => {
  return await supabase
  .from("transactions")
  .insert(transaction)
  .select();
} 

const transactions = {
  GetAll,
  GetSingle,
  CreateTransaction
};

export default transactions;
