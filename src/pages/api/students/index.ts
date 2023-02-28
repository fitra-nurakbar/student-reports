import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Students } from "@/utils/interfaces/Students";
import { Warning } from "@/utils/interfaces/Warning";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json(<Warning>{ message: "Method not allowed", succes: false });
  } else {
    try {
      const students = await prisma.student.findMany({
        include: {
          gender: true,
          class: true,
        },
      });

      const formattedStudents = students.map((student): Students => {
        return {
          id: student.id,
          name: student.name,
          gender: student.gender?.name,
          class: student.class?.name,
          createdAt: student.createdAt,
          updatedAt: student.updatedAt,
        };
      });

      return res.status(200).json(formattedStudents);
    } catch (e) {
      console.log(e);
      return res.status(500).json(<Warning>{
        message: "Error getting data",
        succes: false,
      });
    }
  }
}
