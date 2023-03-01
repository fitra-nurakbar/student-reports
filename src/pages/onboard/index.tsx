import { GetServerSideProps } from "next";
import { Students } from "@/utils/interfaces/Students";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = await fetch("http://localhost:3000/api/students", {
    method: "GET",
  });
  const json = await req.json();
  const students = await json;

  return {
    props: {
      students,
    },
  };
};

export default function Onboard({ students }: { students: Array<Students> }) {
  return (
    <>
      <h1 className={"text-center text-xl font-semibold uppercase my-4"}>Hello Guys</h1>
      {students.map((student, index) => (
        <div
          key={index}
          className={`p-5 ${
            index % 2 === 0 ? `bg-red-500` : `bg-sky-500 text-right`
          } text-white font-semibold max-w-[200px] mb-5 mx-auto rounded-lg`}
        >
          <h2>{student.name}</h2>
          <p>{student.gender}</p>
          <p>{student.class}</p>
        </div>
      ))}
    </>
  );
}
