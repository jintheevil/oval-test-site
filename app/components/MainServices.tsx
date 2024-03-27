import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import Image from "next/image";

import service1 from "@/public/assets/services/oval_services1.jpg"
import service2 from "@/public/assets/services/oval_services2.jpg"

export default function MainServices() {
  return (
      <main id={"services"}>
        <div className={"grid grid-cols-2 gap-10"}>
          <Card isHoverable>
            <CardHeader>
              <Image className={"h-[300px] w-auto"} src={service1} alt={"#"}></Image>
              <h1 className={"ml-5 text-2xl"}>
                Installation and Commissioning
              </h1>
            </CardHeader>
            <CardBody>
              <p>
                Further to supplying our product, we can provide installation services up to commissioning as a package to our customers. Our engineering team can offer the expertise and has countless of experience dealing with the procedures involves.
              </p>
            </CardBody>
          </Card>
          <Card isHoverable>
            <CardHeader>
              <Image className={"h-[300px] w-auto"} src={service2} alt={"#"}></Image>
              <h1 className={"ml-5 text-2xl"}>
                Product Training
              </h1>
            </CardHeader>
            <CardBody>
              <p>
                We also offers product training to our customers as an value added services. Training can be done on site or in-house depending on customer`&#39`s preference.
              </p>
            </CardBody>
          </Card>
        </div>
      </main>
  )
}
