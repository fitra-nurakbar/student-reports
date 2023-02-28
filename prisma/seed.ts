import { PrismaClient, GenderType as gender } from "@prisma/client";
const prisma = new PrismaClient();
import { dataClass, dataGender, dataStudent } from "./data";
import { EnumType } from "typescript";

interface ClassType {
  where: {
    name: string;
  };
  update: {
    name?: string;
  };
  create: {
    name: string;
  };
}

interface GenderType {
  where: {
    id: number
  };
  update: {
    name?: gender
  };
  create: [
    name: gender
  ];
}

interface StudentType {
  where: {
    email: string;
  };
  update: {
    name?: string;
  };
  create: {
    name: string;
    email: string;
    gender_id: number;
    class_id: number;
  };
}

async function main() {
  for (const dClass of dataClass.result as ClassType[]) {
    await prisma.class.upsert(dClass);
    console.log({ class: dClass });
  }

  for(const dGender of dataGender.result as GenderType[]){
      await prisma.gender.upsert(dGender);
      console.log(dGender)
  }

  for (const dStudent of dataStudent.result as StudentType[]) {
    await prisma.student.upsert(dStudent);
    console.log(dStudent);
  }
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
