import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any) => {
  try {
    const posts = await prisma.post.findMany({
      take: 4,
      orderBy: {
        views: 'desc' 
      },
      include: { user: true }, 
    });

    return new NextResponse(
      JSON.stringify({ posts }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

