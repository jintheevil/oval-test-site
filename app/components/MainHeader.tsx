import OvalLogo from "@/public/logo/logo.png"
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import {Button} from "@nextui-org/react";

export default function MainHeader() {
  return (
      <div className={"w-[100dvw] px-8 py-2 bg-white flex justify-between align-middle shadow-lg z-50 sticky top-0 animate__animated animate__bounceInDown animate__delay-2s"}>
        <Image src={OvalLogo} alt={"ovalLogo"} className={"h-20 w-auto"}></Image>
        <NavBar></NavBar>
      </div>
  )
}
