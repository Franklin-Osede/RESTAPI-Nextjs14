# REST APIs with Next.js 14
## Building Robust APIs with MongoDB and Next.js

### Introduction
Welcome to my REST API project created with Next.js 14. This project demonstrates how to build and deploy secure and scalable APIs using Next.js, MongoDB, and various other tools. The project covers user management, category management, and blog management, incorporating various functionalities such as CRUD operations, search, filtering, sorting, pagination, and route protection.

### Why?
The goal of this project is to provide a comprehensive guide for developers looking to create efficient and secure REST APIs. By following this project, you will learn how to:
- Create multiple MongoDB models
- Protect API routes
- Deploy APIs to a production environment
- Implement advanced features like searching, filtering, and pagination

### What does the program do?
This project includes the development of REST APIs for user management, category management, and blog management. The APIs support the following functionalities:
- CRUD operations for users, categories, and blogs
- Search functionality for blogs
- Filtering and sorting of blogs
- Pagination for blogs
- Route protection to secure APIs
- Logging middleware for request tracking

## Quick Start Guide

### How to Install
1. Clone the repository:
    git clone https://github.com/yourusername/your-repo.git
2. Navigate to the project directory:
    cd your-repo
3. Install the dependencies:
    npm install
4. Set up the environment variables by creating a `.env` file:
    
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    NEXT_PUBLIC_API_URL=your_api_url
   
5. Run the development server:
    
    npm run dev
 

⭐️ **Contents** ⭐️

1. **Overview of Project**
2. **Create New Next.js Project**
3. **Files and Folder Structure**
4. **Connect to Database**
5. **Create User Schema**
    - GET Users API
    - POST New User API
    - PATCH User API
    - DELETE User API
6. **Create Category Schema**
    - GET Categories API
    - POST Category API
    - PATCH Category API
    - DELETE Category API
7. **Create Blog Schema**
    - GET Blogs API
    - POST Blog API
    - GET Single Blog API
    - PATCH Blog API
    - DELETE Blog API
    - Search Blogs API with Keywords
    - Filter Blogs with Date
    - Sort Blogs API
    - Blogs Pagination
8. **Protect API Routes**
9. **Logging Middleware**
10. **Deployment**

### Overview of Project
This project demonstrates the creation of REST APIs using Next.js and MongoDB. It covers everything from setting up a new project to deploying the APIs, including implementing advanced functionalities such as searching, filtering, and pagination.

### Create New Next.js Project
Instructions to initialize a new Next.js project, including setting up configurations and dependencies. This step includes running `npx create-next-app` and configuring TypeScript support if needed.

### Files and Folder Structure
Detailed explanation of the project's directory structure and the purpose of each folder and file. This section covers the organization of components, pages, API routes, and utility functions.

### Connect to Database
Guide on connecting the project to a MongoDB database using Mongoose. This section includes setting up the Mongoose connection,
