import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Classes } from "@/utils/interfaces/Classes";
import { Warning } from "@/utils/interfaces/Warning";
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "GET"){
        return res.status(405).json(<Warning>{message: "Method not allowed", succes: false})
    } else {
        try {
            const classes = await prisma.class.findMany()

            return res.status(200).json(classes)
        } catch(e) {
            console.log(e)
            return res.status(500).json(<Warning>{message: "Error getting data", succes: false})
        }
    }
}
