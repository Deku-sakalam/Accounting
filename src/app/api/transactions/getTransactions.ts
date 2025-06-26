import { NextResponse } from "next/server";

export async function getTranasaction() {
  // const { data, error } = await transactionsDB.GetAll();
  // if (error) {
  //   return NextResponse.json({ error: error.message }, { status: 500 });
  // }
  return NextResponse.json({
    // data,
    "test":"jhgjhg"
  });

  //kailangan mong equiry si supabase sa lahat ng transaction
  //return response
}