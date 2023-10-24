import { user } from "@/util/db";
import { NextResponse } from "next/server";

// export async function GET(){
//    const data = user;
//    return NextResponse.json(data , {status :200});
// }

export function POST(){
   return NextResponse.json({reuslt: "Hello"})
}