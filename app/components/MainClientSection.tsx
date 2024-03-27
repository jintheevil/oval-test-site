import {Divider} from "@nextui-org/react";

import petronas from "@/public/assets/clients/8fe2aa_e38b25deeb7e4efdb7394efeda8234b6~mv2.png"
import toray from "@/public/assets/clients/8fe2aa_ed982fe7ea9042faba16b7524d70c823~mv2.png"
import toyoChem from "@/public/assets/clients//8fe2aa_e7a80411951a46f0a1d40f58c5f894ab~mv2.png"
import lion from "@/public/assets/clients/8fe2aa_c1f810fb7d2c44e6ae5ea8eda4e4e91d~mv2.png"
import ibiden from "@/public/assets/clients/8fe2aa_bf655521aaac4e52b1080f59b9a4288f~mv2.jpg"
import exonmobile from "@/public/assets/clients/8fe2aa_a5432d25b33743a8b822293226e778a8~mv2.png"
import mmhe from "@/public/assets/clients/8fe2aa_a202b10816254325b0c7a6da4ae26a31~mv2.png"
import sapuraKencara from "@/public/assets/clients/8fe2aa_6916375f9f7b46a6a602aee2fb4fcc5a~mv2.png"
import kao from "@/public/assets/clients/8fe2aa_3285843cde3b4567b03e3c653b5d5654~mv2.jpg"
import idemitsu from "@/public/assets/clients/8fe2aa_944580f55b48407f860da4333205d46a~mv2.png"
import unknown from "@/public/assets/clients/8fe2aa_69275ce15db848e79b5baa3abac1d667~mv2.png"
import auo from "@/public/assets/clients/8fe2aa_42897c1ef6684a01af541ff21759107e~mv2.png"
import talisman from "@/public/assets/clients/8fe2aa_963d76b46eaa4402a617add32ff2cdbd~mv2.png"
import tnb from "@/public/assets/clients/8fe2aa_497f085430da46fc85e1b1c66dc10751~mv2.png"
import hitachi from "@/public/assets/clients/8fe2aa_80ed5f6f5763473da90c3232c11e0b40~mv2.png"
import kewpie from "@/public/assets/clients/8fe2aa_58c46e80a6e64b4988f77fbaea1e251a~mv2.png"
import shell from "@/public/assets/clients/8fe2aa_19f56c6862e84318bb82619236d6ac3f~mv2.png"
import kaneka from "@/public/assets/clients/8fe2aa_6fd4f919341e47bdacc7587cbc4a479a~mv2.jpg"
import polyplastics from "@/public/assets/clients/8fe2aa_5b776c14b4ce41e6b98d6c46abd6b655~mv2.png"
import malakoff from "@/public/assets/clients/8fe2aa_3eff98dbcf664ab3a485ccf91d127478~mv2.png"
import scientex from "@/public/assets/clients/8fe2aa_2bfd486b397941bd93d057b97f92b97d~mv2.png"
import synthomer from "@/public/assets/clients/8fe2aa_9eeedaffaf0142c2bbc5897d6ace730b~mv2.gif"
import lotte from "@/public/assets/clients/8fe2aa_ec50ffc094ae44e5ba6f1eb9f8a4f7f2~mv2.gif"
import Image from "next/image";


export default function MainClientSection() {
  const clients = [
      petronas,
      shell,
      tnb,
      exonmobile,
      idemitsu,
      mmhe,
      sapuraKencara,
      talisman,
      malakoff,
      toray,
      synthomer,
      auo,
      kao,
      kaneka,
      lotte,
      kewpie,
      lion,
      toyoChem,
      unknown,
      scientex,
      hitachi,
      polyplastics,
      ibiden,
  ]
  return (
      <main id={"clients"}>
        <div className={"w-full bg-[#fafafa] grid place-items-center py-10 mt-10"}>
          <div className={"w-[80%] min-w-[400px] grid place-items-center"}>
            <h1 className={"text-4xl text-black"}>Clients</h1>
            <Divider className={"m-10"}></Divider>
            <div className={"w-full grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center"}>
              {clients.map((client, index) => {
                return (
                    <Image key={index} src={client} alt={"#"}></Image>
                )
              })}
            </div>
          </div>
        </div>
      </main>
  )
}
