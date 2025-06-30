import { NextResponse } from "next/server";
import { Params } from "./getCategory";
import { CategoryDB } from "../categoryDB";

export async function DeleteCategory(request: Request, { params }: Params) {
  const { id } = await params;
  const { data: existingData } = await CategoryDB.getByID(id);
  // get id check if may laman
  console.log("EXISTINGDATA", existingData);
  if (existingData) {
    const { error } = await CategoryDB.delete(id);
    if (error) {
      return NextResponse.json({ error: "unknown" }, { status: 404 });
    }
    return NextResponse.json({ message: `successfully deleted ${id}` });
  }

  if (!existingData) {
    return NextResponse.json({ data: "walang laman" });
  }
}
