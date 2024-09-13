import {Divider} from "@nextui-org/react";
import Image from "next/image";
import service1 from "@/public/assets/systems/services1.jpg";
import service2 from "@/public/assets/systems/services2.jpg";
import service3 from "@/public/assets/systems/services3.jpg";
import service4 from "@/public/assets/systems/services4.jpg";

export default function MainSystems() {
  return (
      <main id={"systems&projects"}>
        <div className={"text-center m-10"}>
          <h1 className={"text-3xl text-bold"}>Our Systems</h1>
        </div>
        <div className={"flex gap-8 px-40 mb-10"}>
          <Image className={"w-[60%] h-auto object-cover"} src={service1} alt={"aboutImage1"}></Image>
          <div className={"text-black"}>
            <h1 className={"text-3xl mb-4"}>Gas Metering System</h1>
            <p>
              Oval being the JV associate company of Oval Asia Pacific Pte. Ltd. (Singapore) and Oval Corporation (Japan), we have had vast experience in gas metering systems. Our professional engineering team based in Singapore offers expertise in design and development to fulfill customer&#39;s stringent requirement. We also have a wide network of suppliers for high quality instruments and materials to be integrated in our facilities in Singapore and Malaysia. Our gas metering systems are delivered to both local and customers world wide.
            </p>
          </div>
        </div>
        <div className={"flex gap-8 px-40 mb-10"}>
          <div className={"text-black text-right"}>
            <h1 className={"text-3xl mb-4"}>Liquid Metering System</h1>
            <p className={"italic"}>
              WE are also one of the leading liquid metering system provider. Our projects range from FPSO, bunkering terminals, fresh water metering to additive dosing in the chemical and f&b industries. Similar to the gas metering systems, the design and development, fabrication and installation are done by our local professional engineering team.
            </p>
          </div>
          <Image className={"w-[60%] h-auto object-cover"} src={service2} alt={"aboutImage1"}></Image>
        </div>
        <div className={"flex gap-8 px-40 mb-10"}>
          <Image className={"w-[60%] h-auto object-cover"} src={service3} alt={"aboutImage1"}></Image>
          <div className={"text-black"}>
            <h1 className={"text-3xl mb-4"}>Prover System</h1>
            <p>
              Oval Corporation in Yokohama, Japan is an accredited calibration facility acknowledged as a Japan Calibration Service System (JCSS) registered company. Therefore, as a subsidiary company of OVAL Corp. in Japan, Oval Engineering Sdn. Bhd. has shared experience and expertise in providing reliable prover systems both pipe and tank proving method for customers across the globe.
            </p>
          </div>
        </div>
        <div className={"flex gap-8 px-40"}>
          <div className={"text-black text-right"}>
            <h1 className={"text-3xl mb-4"}>Tank Truck and Marine Loading System</h1>
            <p className={"italic"}>
              Precision fluid metering instruments and services being the core business of OVAL in general, Oval. has also been actively participating in projects for tank truck loading systems as well as marine loading systems. We have proudly handed over a number of loading systems for oil & gas, chemicals and oleochemical and marine industries for both local and customers around the world.
            </p>
          </div>
          <Image className={"w-[60%] h-auto object-cover"} src={service4} alt={"aboutImage1"}></Image>
        </div>
      </main>
  )
}
