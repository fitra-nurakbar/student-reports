import { GenderType } from "@prisma/client";

export interface Students {
  id: Number;
  name: String | null;
  gender: GenderType | null | undefined;
  class: String | null | undefined;
  createdAt: Date;
  updatedAt: Date;
}
