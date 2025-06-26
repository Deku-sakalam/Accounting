import { NextResponse } from "next/server";
import { CategoryDB } from "./categoryDB";

export const GetAllCategories = async () => {
  const { data } = await CategoryDB.getAll();
  return NextResponse.json(data);
};
