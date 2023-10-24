import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  //     console.log(data,content.params.id);
  //    const data = user;
  const userData = user.filter((item) => item.id == content.params.id);

  return NextResponse.json(
    userData.length == 0
      ? { result: "no data found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}
