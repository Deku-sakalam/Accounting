import { handleize } from "@/app/lib/utilies/handleize";
import { CategoryDB } from "./categoryDB";
import { NextResponse } from "next/server";
import { baseCategoryHandles } from "@/constants/baseCategoryName";
import { isUUID } from "@/app/lib/utilies/uuid";

export async function CreateCategoryAPI(request: Request) {
  const requestBody = await request.json();
  requestBody.handle = handleize(requestBody.name);
  if (requestBody.parent === null) {
    if (!baseCategoryHandles.includes(handleize(requestBody.name))) {
      return NextResponse.json(
        { error: "Error not on the basic Category" },
        { status: 403 }
      );
    }
  } else {
    if (!isUUID(requestBody.parent)) {
      return NextResponse.json(
        { error: "PLEASE INPUT THE UUID" },
        { status: 403 }
      );
    }

    // get sa db yung category na may id na parent
    const { data } = await CategoryDB.getByID(requestBody.parent);
    if (!data) {
      return NextResponse.json({ error: "not created" }, { status: 403 });
    }
    // kung hindi existing edi error
  }
  //check the given parent if exisiting

  //check the given if name of the given has no parent or null
  //once the parent is null check the basicCategoryname
  //once the parent name is not equal to basicCategoryname create an error

  // check first if category name already exists
  const { error, data } = await CategoryDB.create(requestBody);
  if (error) {
    console.log(error.code);
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

//check the given if name of the given has no parent or null
//once the parent is null check the basicCategoryname
//once the parent name is not equal to basicCategoryname create an error
