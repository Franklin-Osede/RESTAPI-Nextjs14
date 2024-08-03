import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Blog from "@/lib/modals/category";
import Category from "@/lib/modals/category";
import {Types} from "mongoose";
import User from "@/lib/modals/category";


export const GET = async (request: Request, context: {params: any})=>{
    const blogId = context.params.blog;
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");
        const categoryId = searchParams.get("categoryId");

        if(!userId || !Types.ObjectId.isValid(userId) ){
            return new NextResponse(
                JSON.stringify({message: "Invalid or missing userId"}),
                {status:400}
            );
        }

        if(!categoryId || !Types.ObjectId.isValid(categoryId)){
            return new NextResponse(
                JSON.stringify({message:"Invalid or missing categoryId"}),
                {status:400}
            )
        }

        if(!blogId || !Types.ObjectId.isValid(blogId)){
            return new NextResponse(
                JSON.stringify({message:"Invalid or missing blogId"}),
                {status:400}
            )
        };

        await connect();

        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(
                JSON.stringify({ message: "User not found" }),
                { status: 404 }
            );
        }
    
        const category = await Category.findById(categoryId);
        if (!category) {
            return new NextResponse(
                JSON.stringify({ message: "Category not found" }),
                { status: 404 }
            );
        }

        const filter: any = {
            user: new Types.ObjectId(userId),
            category: new Types.ObjectId(categoryId)
        };

        //TODO

        const blogs = await Blog.find(filter);

        return new NextResponse(JSON.stringify({blogs}),{
            status:200,
        })

    } catch (error:any) {
        return new NextResponse("Error in fetching a blog" + error.message, {
            status: 500
        })
    }
}

