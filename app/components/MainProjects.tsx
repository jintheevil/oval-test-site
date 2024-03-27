import Image from "next/image";
import project from "@/public/assets/projects/projects.jpg";

export default function MainProjects() {
  return (
      <main id={"projects"}>
        <div className={"gap-8 px-40 my-10 bg-white py-10"}>
          <Image className={"w-full h-auto object-cover"} src={project} alt={"aboutImage1"}></Image>
          <div className={"text-black text-center mt-10"}>
            <h1 className={"text-4xl mb-4"}>Our Projects</h1>
            <p>
              Oval being the JV associate company of Oval Asia Pacific Pte. Ltd. (Singapore) and Oval Corporation (Japan) have been actively undertaking projects globally. Since our establishment in 2004, our team we have been dedicating ourselves in providing high quality and insightful solutions to satisfy our customer`&#39`s rigorous requirement especially in the Oil & Gas industries where standards and expectations are not to be compromised. We have earned ourselves reputable name throughout the years and have since became a leader in metering and measurement of Oil & Gas in this region.
            </p>
          </div>
        </div>
      </main>
  )
}
