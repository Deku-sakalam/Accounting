import { NextResponse } from "next/server";
import { CategoryDB } from "../categoryDB";

export type Params = {
  params: {
    id: string;
  };
};
export async function getCategory(request: Request, { params }: Params) {
  const { id } = await params;
  const { data, error } = await CategoryDB.getByID(id);
  if (error) {
    return NextResponse.json({ error: "walang mahanap" }, { status: 404 });
  }
  return NextResponse.json({
    data,
  });
}
