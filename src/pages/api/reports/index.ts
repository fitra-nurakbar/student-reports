import type { NextApiRequest, NextApiResponse } from "next";
import { Reports } from "@/utils/interfaces/Reports";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reports>
) {
  res.status(200).json({
    id: 1,
    name: "My Name",
    day: new Date(),
    image: {
      alt: "photo profile",
      baseUrl: "/",
      name: "my-profile.png",
    },
    description: "hobies: drawing",
  });
}
