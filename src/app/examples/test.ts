import {validateTransaction} from "@/app/lib/utilies/validateTransaction"
import { Transaction } from "@/types/transaction";

const sampleData: Transaction = [
  {
    amount: 400,
    name: "debit",
  },
  {
    amount: 400,
    name: "credit",
  },
  {
    amount: 300,
    name: "debit",
  },
  {
    amount: 300,
    name: "credit",
  },
];
const test = () => {
    return validateTransaction(sampleData);
};

export default test;
