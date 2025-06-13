import { NextResponse } from "next/server";
import supabase from "@/app/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("transactions")
    .select();
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
  const { data, error } = await supabase
    .from("transactions")
    .insert({
      amount: res.amount,
      sender_name: res.sender_name,
      receiver_name: res.receiver_name,
      status: res.status,
    })
    .select();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({
    message: "Transaction created successfully",
    data,
  });
}
