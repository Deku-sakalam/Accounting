import { NextResponse } from "next/server";
import { CategoryDB } from "../categoryDB";
import { handleize } from "@/app/lib/utilies/handleize";
import { Params } from "./getCategory";
import { baseCategoryHandles } from "@/constants/baseCategoryName";

export async function UpdateCategory(request: Request, { params }: Params) {
  const requestBody = await request.json();
  const { id } = await params;

  // get id on data base
  const { data: existingData } = await CategoryDB.getByID(id);
  console.log("existingData", existingData);
  if (baseCategoryHandles.includes(existingData.handle)) {
    return NextResponse.json(
      { error: "Error: bawal baguhin ang basecategory" },
      { status: 409 }
    );
  }
  //check the handle  is equal to basecategoryhandle
  //oo error dapat

  const { data, error } = await CategoryDB.update(id, {
    name: requestBody.name,
    parent_id: requestBody.parent_id,
    handle: handleize(requestBody.name),
  });
  if (existingData.handle === handleize(requestBody.name)) {
    return NextResponse.json({ error: "Already Updated" }, { status: 400 });
  }
  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Error Duplicate notice" },
        { status: 403 }
      );
    }
    console.error(error, requestBody);
  }
  return NextResponse.json(data);
}
