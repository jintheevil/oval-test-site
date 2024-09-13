'use client'

import MainHeader from "@/app/components/MainHeader";
import {Divider, NextUIProvider} from "@nextui-org/react";
import MainHero from "@/app/components/MainHero";
import MainAbout from "@/app/components/MainAbout";
import MainClientSection from "@/app/components/MainClientSection";
import MainContact from "@/app/components/MainContact";
import MainFooter from "@/app/components/MainFooter";
import {Provider} from "react-redux";
import {store} from "@/lib/store";
import MainSystems from "@/app/components/MainSystems";
import MainProjects from "@/app/components/MainProjects";
import MainServices from "@/app/components/MainServices";
import LoadingScreen from "@/app/components/LoadingScreen";

export default function Home() {
  return (
      <main>
            <NextUIProvider>
              <LoadingScreen></LoadingScreen>
              <div className={"w-[100dvw] h-auto grid place-items-center bg-gray-200 px-20"}>
                <MainHero></MainHero>
                <div className={"grid place-items-center text-black w-[80%] px-10 mt-20 mb-10 animate__animated animate__fadeInUp animate__delay-4s"}>
                  <h1 className={"text-lg font-semibold"}>What we believe in.</h1>
                  <p className={"mt-5 text-3xl font-light text-center"}>Adding value to your business and growing it alongside us.</p>
                  <p className={"mt-5 mb-20 text-3xl font-light text-center"}>You are our priority.</p>
                  <Divider></Divider>
                </div>
                <MainAbout></MainAbout>
                <MainSystems></MainSystems>
                <MainProjects></MainProjects>
                <MainServices></MainServices>
                <MainClientSection></MainClientSection>
                <MainContact></MainContact>
              </div>
            </NextUIProvider>
      </main>
  )
}
