import { NextResponse } from "next/server";


export async function CreateTransaction(request: Request) {
  // const res = await request.json();
  // const { data, error } = await transactionsDB.CreateTransaction({
  //   amount: res.amount,
  //   sender_name: res.sender_name,
  //   receiver_name: res.receiver_name,
  //   status: res.status,
  // });
  // if (error) {
  //   return NextResponse.json({ error: error.message }, { status: 500 });
  // }
  return NextResponse.json({
    message: "Transaction created successfully",
    // data,
  });
}