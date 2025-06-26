import { NextResponse } from "next/server";
import supabase from "@/app/lib/supabase";

// Kunin sa request body ay array.
// Kung ano yung request body, ayun yung ilagay sa database.
// return

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json(
        { error: "request is not array" },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from("transactions")
      .insert(body)
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      message: "Transaction created successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
