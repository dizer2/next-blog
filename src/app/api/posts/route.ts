import { getAuthSession } from "@/app/utils/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any) => {
  try {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
    const pageString = searchParams.get("page");
    const page = pageString ? parseInt(pageString, 10) : 1;

    const catString = searchParams.get("cat");

    const POSTS_PER_PAGE = 4;

    let whereClause = {};
    if (catString) {
      whereClause = { catSlug: catString };
    }

    const posts = await prisma.post.findMany({
      take: POSTS_PER_PAGE,
      skip: POSTS_PER_PAGE * (page - 1),
      where: whereClause,
    });

    const totalPosts = await prisma.post.count({
      where: whereClause,
    });
    const totalPage = Math.ceil(totalPosts / POSTS_PER_PAGE);

    return new NextResponse(
      JSON.stringify({ posts, totalPosts, totalPage }),
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


// CREATE A POST
export const POST = async (req: any) => {
  const session = await getAuthSession();

  if (!session?.user?.email) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });

  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};
