import {Card, CardBody, CardHeader, Divider, Textarea} from "@nextui-org/react";
import {Input} from "@nextui-org/input";

export default function MainContact() {
  return (
      <main id={"contact"}>
        <div className={"w-full mt-10 grid grid-cols-2"}>
          <div className={"w-[100%] p-10 bg-[#fafafa] grid place-items-center text-center"}>
            <h1 className={"text-black text-4xl"}>Contact us</h1>
            <Divider className={"m-10"}></Divider>
            <form className={"w-full grid gap-10 text-black"}>
              <div className={"grid grid-cols-2 gap-10"}>
                <Input variant={"bordered"} fullWidth={true} label={"Name"}></Input>
                <Input variant={"bordered"} label={"Company"}></Input>
              </div>
              <div className={"grid grid-cols-2 gap-10"}>
                <Input variant={"bordered"} fullWidth={true} label={"Phone"}></Input>
                <Input variant={"bordered"} label={"Email"}></Input>
              </div>
              <Textarea variant={"bordered"} label={"Enquiries"} placeholder={"Let us know what you think!"}></Textarea>
            </form>
          </div>
          <div className={"w-full p-8 bg-[#fafafa] grid place-items-center text-center"}>
            <Card className={"w-full h-full p-10"}>
              <CardHeader>
                <h1 className={"text-4xl"}>Our Office</h1>
              </CardHeader>
              <Divider className={"my-10"}></Divider>
              <CardBody>
                <h1>OVAL OIL & GAS SDN BHD (742058-H)</h1>
                <p>
                  27-6, Block D1, Jalan PJU 1/41,
                </p>
                <p>
                  Dataran Prima, 47301 Petaling Jaya
                </p>
                <p>
                  Selangor Darul Ehsan, Malaysia
                </p>
                <p>
                  Tel : +603-7803 5578 / 9858
                </p>
                <p>
                  Fax : +603-7803 7957
                </p>
                <p>
                  E-mail : oval@oval.com.my
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
  )
}
