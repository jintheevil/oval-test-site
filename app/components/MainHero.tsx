import HeroImage from "@/public/assets/pexels-pixabay-257700.jpg"
import Image from "next/image";

export default function MainHero() {
  return (
      <div className={"w-[100%] h-auto grid place-items-center relative"}>
        <Image src={HeroImage} alt={"mainHero"} className={"w-[100%] h-auto max-h-[60dvh] object-cover"}></Image>
        <div className={"w-full h-full absolute top-0 left-0 bg-gray-400 opacity-70 z-10 grid place-items-center"}>
          <h1 className={"text-6xl"}>We add <b>VALUE</b> to the flow</h1>
        </div>
      </div>
  )
}
