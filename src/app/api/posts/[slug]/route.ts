import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any, { params }: { params: { slug: string } }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true }, 
    });

    if (!post) {
      throw new Error("Post not found");
    }

    await prisma.post.update({
      where: { slug },
      data: { views: post.views + 1 }, 
    });

    return new NextResponse(
      JSON.stringify(post),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching or updating post:", err);
    return new NextResponse(
      JSON.stringify({ message: "Post not found" }),
      { status: 404 }
    );
  }
};
