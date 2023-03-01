import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/Tests.module.css";

export default function Handler() {
  const [active, setActive] = useState(false);

  const handlerToggle = () => {
    setActive(!active);
  };

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <main className={styles.main}>
      <div className={styles.land}>
        <Image
          src={"/assets/gas-3kg.png"}
          alt="Gas LPG"
          width={200}
          height={200}
          priority
          className={active ? styles.redActive : styles.red}
        />
        <Image
          src={"/assets/gas-3kg.png"}
          alt="Gas LPG"
          width={200}
          height={200}
          priority
          className={active ? styles.blueActive : styles.blue}
        />
      </div>
      <button className={`${active ? `bg-red-600` : `bg-sky-600` } text-white px-5 py-2 rounded-md my-5`} onClick={handlerToggle}>
        {active ? "Stop" : "Play"}
      </button>
    </main>
  );
}
