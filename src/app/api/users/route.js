import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(){
   const data = user;
   return NextResponse.json(data , {status :200});
}
   
export async function POST(request){
   let payload =await request.json();
   console.log(payload);
   if(!payload.name || !payload.age ||!payload.email){
      return NextResponse.json({reuslt:"Please provide all fields",success:false} ,{ status: 400 });
   }
   return NextResponse.json({reuslt: "New User Created"  , success:true},{ status:201});
}