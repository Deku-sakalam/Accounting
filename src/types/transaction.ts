export type Category = {
  amount: number;
  name: "debit" | "credit";
};
export type Transaction = Category[]
