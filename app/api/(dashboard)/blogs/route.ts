import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Blog from "@/lib/modals/blog"; // Import the Blog model
import { Types } from "mongoose"; // Import Types for ObjectId validation
import User from "@/lib/modals/user"; // Import the User model
import Category from "@/lib/modals/category"; // Import the Category model

// GET handler to fetch blogs based on userId and categoryId
export const GET = async (request: Request) => {
    try {
        const { searchParams } = new URL(request.url); // Extract search parameters from the request URL
        const userId = searchParams.get("userId"); // Get userId from search parameters
        const categoryId = searchParams.get("categoryId"); // Get categoryId from search parameters

        // Validate userId
        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({ message: "Invalid or missing userId" }), // Return error if userId is invalid or missing
                { status: 400 }
            );
        }

        // Validate categoryId
        if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return new NextResponse(
                JSON.stringify({ message: "Invalid or missing categoryId" }), // Return error if categoryId is invalid or missing
                { status: 400 }
            );
        }

        await connect(); // Ensure the database is connected

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(
                JSON.stringify({ message: "User not found" }), // Return error if user is not found
                { status: 404 }
            );
        }

        // Check if the category exists
        const category = await Category.findById(categoryId);
        if (!category) {
            return new NextResponse(
                JSON.stringify({ message: "Category not found" }), // Return error if category is not found
                { status: 404 }
            );
        }

        // Filter blogs by userId and categoryId
        const filter = {
            user: new Types.ObjectId(userId), 
            category: new Types.ObjectId(categoryId),
        };

        // Fetch blogs based on the filter
        const blogs = await Blog.find(filter);

        return new NextResponse(
            JSON.stringify({ blogs }), // Return the fetched blogs
            { status: 200 }
        );

    } catch (error: any) {
        return new NextResponse(
            "Error in fetching blogs: " + error.message, // Return error message if an exception occurs
            { status: 500 }
        );
    }
};

// POST handler to create a new blog
export const POST = async (request: Request) => {
    try {
        const { searchParams } = new URL(request.url); // Extract search parameters from the request URL
        const userId = searchParams.get("userId"); // Get userId from search parameters
        const categoryId = searchParams.get("categoryId"); // Get categoryId from search parameters

        const body = await request.json(); // Parse the request body
        const { title, description } = body; // Extract title and description from the request body

        // Validate userId
        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({ message: "Invalid or missing userId" }), // Return error if userId is invalid or missing
                { status: 400 }
            );
        }

        // Validate categoryId
        if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return new NextResponse(
                JSON.stringify({ message: "Invalid or missing categoryId" }), // Return error if categoryId is invalid or missing
                { status: 400 }
            );
        }

        await connect(); // Ensure the database is connected

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(
                JSON.stringify({ message: "User not found" }), // Return error if user is not found
                { status: 404 }
            );
        }

        // Check if the category exists
        const category = await Category.findById(categoryId);
        if (!category) {
            return new NextResponse(
                JSON.stringify({ message: "Category not found" }), // Return error if category is not found
                { status: 404 }
            );
        }

        // Create a new blog instance
        const newBlog = new Blog({
            title,
            description,
            user: new Types.ObjectId(userId),
            category: new Types.ObjectId(categoryId)
        });

        await newBlog.save(); // Save the new blog to the database
        return new NextResponse(
            JSON.stringify({ message: "Blog is created", blog: newBlog }), // Return success message and the created blog
            { status: 201 } // Status code for created
        );

    } catch (error: any) {
        return new NextResponse("Error in creating blog: " + error.message, { // Return error message if an exception occurs
            status: 500,
        });
    }
};
