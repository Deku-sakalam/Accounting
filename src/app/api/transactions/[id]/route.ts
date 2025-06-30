import supabase from "@/app/lib/supabase";
import { NextResponse } from "next/server";
import transactionsDB from "@/app/db/transactions";

type Params = {
  params: {
    id: string;
  };
};
export async function GET(request: Request, { params }: Params) {
  const { id } = await params;
  const { data, error } = await transactionsDB.GetSingle(id);
  if (error) {
    return NextResponse.json({ error: "walang mahanap" }, { status: 404 });
  }
  return NextResponse.json({
    data,
  });
}
//get id
//get exciting transaction
//check the ammount if the same
export async function PUT(request: Request, { params }: Params) {
  const id = params.id;
  const requestBody = await request.json();
  console.log("requestBody", requestBody.amount);

  // get the existing data from supabase
  const result = await supabase
    .from("transactions")
    .select()
    .eq("id", id)
    .single();
  const existingData = result.data;
  console.log(existingData);
  const existingAmount = existingData.amount;
  const newAmount = requestBody.amount;
  console.log(newAmount, existingAmount);
  if (newAmount === existingAmount) {
    return NextResponse.json({ error: "Already Updated" }, { status: 400 });
  }

  // compare the ammout is same form request body vs data supabase

  const { data, error } = await supabase
    .from("transactions")
    .update({
      amount: requestBody.amount,
      sender_name: requestBody.sender_name,
      receiver_name: requestBody.receiver_name,
      status: requestBody.status,
    })
    .eq("id", id)
    .select();
  if (error) {
    return NextResponse.json({ error: "walang mahanap" }, { status: 404 });
  }

  return NextResponse.json({
    data,
  });
}
export async function DELETE(request: Request, { params }: Params) {
  const { id } = await params;
  const { data, error } = await supabase
    .from("transactions")
    .delete()
    .eq("id", id)
    .select();
  console.log(data);
  if (error) {  
    return NextResponse.json({ error: "walang mahanap" }, { status: 404 });
  }
  if (!data || !data.length) {
    return NextResponse.json({ data: "walang laman" });
  }
  return NextResponse.json({
    message: `successfully deleted ${id}`,
  });
}

//kung may data success kung walang laman
