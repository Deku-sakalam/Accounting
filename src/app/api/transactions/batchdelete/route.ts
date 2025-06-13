import supabase from "@/app/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { ids } = await request.json();
  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json(
      { error: "Walang IDs na binigay" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("transactions")
    .delete()
    .in("id", ids)
    .select();

  if (error) {
    return NextResponse.json(
      { error: "Hindi natanggal ang mga data" },
      { status: 500 }
    );
  }

  if (!data || data.length === 0) {
    return NextResponse.json(
      { message: "Walang nahanap na matching na IDs" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    message: `Successfully deleted ${data.length} transaction(s).`,
    deleted: data,
  });
}
