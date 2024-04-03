import {
  NextResponse
} from "next/server";
import {
  prisma
} from "@/libs/prisma";

export async function GET(req, {
  params
}) {
  try {
    const id = params.taskId;
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id)
      },
    });
    if (!task) {
      return NextResponse("Task not found");
    } else if (task) {
      return NextResponse.json(task);
    }
  } catch (error) {
    return NextResponse.json("Record to search does not exist.");
  }
}

export async function PUT(req, {
  params
}) {
  try {
    const data = await req.json();
    const id = params.taskId;
    const task = await prisma.task.update({
      where: {
        id: Number(id)
      },
      data: data,
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json("Record to update does not exist.");
  }
}

export async function DELETE(req, {
  params
}) {
  try {
    const id = params.taskId;
    const task = await prisma.task.delete({
      where: {
        id: Number(id)
      },
    });
    return NextResponse.json({
      "deleted Task": task
    });
  } catch (error) {
    return NextResponse.json({
      message: "Record to delete does not exist.",
    });
  }
}