import { CreateTransaction } from "./createTransaction";
import { getTranasaction } from "./getTransactions";

export async function GET() {
  return getTranasaction;
}

export async function POST(request: Request) {
  return CreateTransaction(request);
} 
