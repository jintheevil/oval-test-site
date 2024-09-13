import {Card, CardBody, CardHeader, Divider, Textarea} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";

export default function MainContact() {

  const center = {
    lat: 3.116361618041992,
    lng: 101.59452819824219,
  };

  return (
      <main id={"contact"} className={"w-full"}>
        <div className={"w-full mt-10 grid grid-cols-2"}>
          <APIProvider apiKey={"AIzaSyBYHrOF_v4QYXVmRVh5A6-LuW4QocJOQDk"}>
            <Map
                defaultCenter={center}
                defaultZoom={17}
            >
              <Marker
                  position={center}
                  clickable={true}
              ></Marker>
            </Map>
          </APIProvider>
          <div className={"w-full p-8 bg-[#fafafa] grid place-items-center text-center"}>
            <Card className={"w-full h-full p-10"}>
              <CardHeader>
                <h1 className={"text-3xl"}>Our Office</h1>
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
        <div className={"w-[100%] p-10 bg-[#fafafa] grid place-items-center text-center"}>
          <h1 className={"text-black text-3xl"}>Contact us</h1>
          <small className={"mt-2"}>
            For any inquiries, questions or commendations, please call: <b>+603-78035578</b> or fill out the following form
          </small>
          <Divider className={"mb-10 mx-10 mt-4"}></Divider>
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
      </main>
  )
}
