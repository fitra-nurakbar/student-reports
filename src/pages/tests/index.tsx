import React, { useState } from "react";
import { useEffect } from "react";
import styles from "@/styles/Tests.module.css"

interface Props {
  param: number;
}

export async function Params() {
  let param = 0;

  return {
    props: { param },
  };
}

export default function Test({ param }: Props) {
  const [input, setInput] = useState<number>(0);
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(e.target.value));
  };

  const handlerClick = () => {
    let arrElements: any = [];
    for (let i = 1; i <= input; i++) {
      let row = [];
      for (let j = 1; j <= i; j++) {
        row.push(<span key={j}>{j}</span>);
      }
      arrElements.push(
        <div className="flex justify-center gap-5" key={i}>
          {row}
        </div>
      );
    }

    setOutput(arrElements);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [output]);

  return (
    <>
      <input
        className={styles.spinner}
        type="number"
        onChange={handlerInput}
        readOnly
      />
      <button
        onClick={handlerClick}
        className="border border-red-600 p-2 bg-slate-600 text-white"
      >
        Create
      </button>
      {loading ? <h1>Loading...</h1> : output}
    </>
  );
}
