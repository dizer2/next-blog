import { getAuthSession } from "@/app/utils/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any) => {
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

    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    console.error("Error fetching comments:", err);
    return new NextResponse(JSON.stringify({ message: "Comments not found" }), {
      status: 404,
    });
  }
};


// CREATE A COMMENT
export const POST = async (req: any) => {
  const session = await getAuthSession();

  if (!session?.user?.email) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment), { status: 200 });

  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};