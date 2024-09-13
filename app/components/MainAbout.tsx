import {Divider} from "@nextui-org/react";
import Image from "next/image";

import oilRigImage from "@/public/assets/pexels-tom-fisk-10407689.jpg"
import oilRigWorker from "@/public/assets/pexels-kateryna-babaieva-2760241.jpg"
import qualityAssurance from "@/public/assets/8fe2aa_05252df9d63f4628b875af0eedc56c45~mv2.png"
import 'animate.css';

export default function MainAbout() {
  return (
      <main id={"about"}>
        <div className={"flex gap-8 px-40 mb-10 animate__animated animate__fadeInUp animate__delay-1s"}>
          <Image className={"w-[60%] h-auto object-cover"} src={oilRigImage} alt={"aboutImage1"}></Image>
          <div className={"text-black"}>
            <h1 className={"text-3xl mb-4"}>About Us</h1>
            <p>
              Oval is actively involved in trading/distribution of Oval Japan manufactured product & metering system and international branded products to Oil & Gas, Petrochemical, Chemical, Power, Water, Renewable Energy, Semiconductor, Electronic and various general industries. We specialize in providing measurement and metering solutions to these industries. Our parent company and subsidiaries undertake projects in many countries around the world. Our complete team of engineering professionals offers expert design and development right up to installation, testing and commissioning, and training.
            </p>
            <h1 className={"text-3xl mb-4 mt-4"}>Our Mission</h1>
            <p>
              Our mission is to provide the full line of Oval products and agency products with engineering solutions dedicated to fulfill the needs of our customers and enhancing competitive edge in today’s demanding business environment. With a team of highly dedicated sales and engineering professionals, we have acquired an impressive track record based on meeting customer requirement and satisfaction.
            </p>
          </div>
        </div>
        <div className={"flex gap-8 px-40 animate__animated animate__fadeInUp animate__delay-2s"}>
          <div className={"text-black text-right"}>
            <h1 className={"text-3xl mb-4"}>Quality Standards & Policy</h1>
            <p className={"italic"}>
              “OVAL aims to be a market leader in the supply of Process Measurement & Instrumentation Products for the Oil & Gas and Petrochemical Industry in Malaysia by continual improvement on Customer Satisfaction”
            </p>
            <div className={"grid grid-cols-2 text-center mt-10"}>
              <Image src={qualityAssurance} alt={"aboutImage1"}></Image>
              <p>
                Accredited Malaysian Standard MS ISO 9001:2015 Quality Management System
              </p>
            </div>
          </div>
          <Image className={"w-[60%] h-auto object-cover"} src={oilRigWorker} alt={"aboutImage1"}></Image>
        </div>
      </main>
  )
}
