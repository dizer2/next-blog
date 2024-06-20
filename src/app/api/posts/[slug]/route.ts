import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

//* GET SINGLE POST
export const GET = async ({req, params}: any) => {
  const {slug} = params;

  try {
    const post = await prisma.post.findUnique({
      where: {slug: slug as any}
    });
    
    return new NextResponse(
      JSON.stringify(post),
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
