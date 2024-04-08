import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    if (!title || !description) {
      return NextResponse.json("Data required for POST request failed");
    } else if (title != null && description != null) {
      const task = await prisma.task.create({
        data: { title, description },
      });
      return NextResponse.json(task);
    }
  } catch (error) {
    return NextResponse.json("Problems to create record.");
  }
}
