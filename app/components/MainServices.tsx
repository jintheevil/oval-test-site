import {Card, CardBody, CardHeader, Divider, Tabs, Tab} from "@nextui-org/react";
import Image from "next/image";

import service1 from "@/public/assets/services/oval_services1.jpg"
import service2 from "@/public/assets/services/oval_services2.jpg"

import 'animate.css';

export default function MainServices() {
  return (
      <main id={"services"}>
        {/*<div className={"grid grid-cols-2 gap-10"}>*/}
        <h2 className={"text-3xl mb-10"}>Our Services</h2>
        <Tabs color={"primary"} variant={"underlined"}>
          <Tab key={"Installation and Commissioning"} title={"Installation and Commissioning"}>
            <Card>
              <CardBody>
                <div className={"flex gap-4 place-items-center"}>
                  <Image className={"h-[300px] w-auto"} src={service1} alt={"#"}></Image>
                  <p>
                    Further to supplying our product, we can provide installation services up to commissioning as a package to our customers. Our engineering team can offer the expertise and has countless of experience dealing with the procedures involves.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key={"Product Training"} title={"Product Training"}>
            <Card>
              <CardBody>
                <div className={"flex gap-4 place-items-center"}>
                  <Image className={"h-[300px] w-auto"} src={service2} alt={"#"}></Image>
                  <p>
                    We also offers product training to our customers as an value added services. Training can be done on site or in-house depending on customer&#39;s preference.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </main>
  )
}
