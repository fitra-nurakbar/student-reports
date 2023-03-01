import styles from "@/styles/Tests.module.css";
import { useEffect, useState } from "react";

export default function Tests() {
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
        <div className={active ? styles.redActive : styles.red}></div>
        <div className={active ? styles.blueActive : styles.blue}></div>
      </div>
      <button className={styles.button} onClick={handlerToggle}>
        {active ? "Stop" : "Play"}
      </button>
    </main>
  );
}
