import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any) => {
  try {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
    const pageString = searchParams.get("page");
    const page = pageString ? parseInt(pageString, 10) : 1;

    const POSTS_PER_PAGE = 4; 

    const posts = await prisma.post.findMany({
      take: POSTS_PER_PAGE,
      skip: POSTS_PER_PAGE * (page - 1),
    });

	const totalPosts = await prisma.post.count();
	const totalPage = Math.ceil(totalPosts / POSTS_PER_PAGE);

    return new NextResponse(JSON.stringify({ posts, totalPosts, totalPage}), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
};
