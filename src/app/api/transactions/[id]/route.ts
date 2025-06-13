import supabase from "@/app/lib/supabase";
import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  const { id } = await params;
  const { data, error } = await supabase
    .from("transactions")
    .select()
    .eq("id", id)
    .single();
  if (error) {
    return NextResponse.json({ error: "walang mahanap" }, { status: 404 });
  }
  return NextResponse.json({
    data,
  });
}
export async function PUT(request: Request, { params }: Params) {
  const id = params.id;
  const requestBody = await request.json();
  console.log("requestBody", requestBody.amount);
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
