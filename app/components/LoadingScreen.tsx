'use client';
import {Progress} from "@nextui-org/react";
import {useEffect, useState} from "react";

export default function LoadingScreen() {
  const [value, setValue] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 50));
    },  500);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to ensure effect runs only once

// Add another useEffect to reset value to 0 when it reaches 100
  useEffect(() => {
    if (value === 100) {
      setValue(0);
    }
  }, [value]);
  return (
      <main>
        <div className={"w-[100dvw] h-[100dvh] bg-white grid place-items-center absolute top-0 left-0 animate__animated animate__fadeOut animate__delay-2s overflow-hidden" + (value ? " z-50" : " -z-50")}
        >
          <Progress className={"w-[30%]"} value={value}></Progress>
        </div>
      </main>
  )
}
