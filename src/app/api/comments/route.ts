  import { PrismaClient } from "@prisma/client";
  import { NextResponse } from "next/server";

  const prisma = new PrismaClient();

  export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    
    const postSlug = searchParams.get("postSlug");


    try {
      const comments = await prisma.comment.findMany({
        where: {
          ...(postSlug && { postSlug }),
        },
        include: { user: true },
      });

      if (!comments) {
        throw new Error("Comments not found");
      }

      return new NextResponse(
        JSON.stringify(comments),
        { status: 200 }
      );
    } catch (err) {
      console.error("Error fetching comments:", err);
      return new NextResponse(
        JSON.stringify({ message: "Comments not found" }),
        { status: 404 }
      );
    }
  };
