import { connectionStr } from "@/lib/db";
import { Blog } from "@/lib/model/blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
  let data = [];
  try{
  await  mongoose.connect(connectionStr);
  data = await Blog.find();
  }catch (error){
    data= {success:false}
  }
  return NextResponse.json({ result: true , success:data});

}

export async function POST(){
  await mongoose.connect(connectionStr);
  let blog = new Blog();
  const result = await blog.save();
  return NextResponse.json({result , success:true})
}