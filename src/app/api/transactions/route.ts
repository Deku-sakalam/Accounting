import { NextResponse } from "next/server";
import transactionsDB from "@/app/db/transactions";

export async function GET() {
  const { data, error } = await transactionsDB.GetAll();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({
    data,
  });

  //kailangan mong equiry si supabase sa lahat ng transaction
  //return response
}

export async function POST(request: Request) {
  const res = await request.json();
  const { data, error } = await transactionsDB.CreateTransaction({
    amount: res.amount,
    sender_name: res.sender_name,
    receiver_name: res.receiver_name,
    status: res.status,
  });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({
    message: "Transaction created successfully",
    data,
  });
}
