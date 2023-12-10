import mongoose from "mongoose";

const BlogModule = new mongoose.Schema({
    name:String,
    age:String
});
export let Blog = mongoose.model.blogs || mongoose.model("blogs" , BlogModule);