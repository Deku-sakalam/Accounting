import { NextResponse } from "next/server";
import { CategoryDB } from "./categoryDB";

export const GetAllCategories = async (req: NextRequest) => {
  const name = req.nextUrl.searchParams.get("name");
  const { data, error } = await CategoryDB.getAll(name);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
};
