"use client";

import { AccordionDemo } from "@/components/AccordionDemo";
import CompanyFullBox from "@/components/CompanyFullBox";
import CompanyInfo from "@/components/CompanyInfo";
import Connection from "@/components/Connection";
import ContactBox from "@/components/ContactBox";
import HomeCard from "@/components/HomeCard";
import Navbar from "@/components/Navbar";
import UserComment from "@/components/UserComment";
import Image from "next/image";
import homeFurniture from "../../public/homeFurniture.png";
import map from "../../public/map.svg";
import Futura from "next/font/local";
const futura = Futura({ src: "../fonts/futura.ttf" });
import Gerhaus from "next/font/local";
import BlackBtn from "@/components/BlackBtn";
const gerhaus = Gerhaus({ src: "../fonts/gerhaus/gerhaus.ttf" });
import companyFull from "../../public/companyFull.png";
import companyFullKitchen from "../../public/companyFull-kitchen.png";
import bedrom from "../../public/bedrom.png";
import childRoom from "../../public/childRoom.png";
import hotel from "../../public/hotel.png";
import commentUser from "../../public/commentUser.png";
import aleksey from "../../public/aleksey.png";
import genadiy from "../../public/genadiy.png";
import evgeniy from "../../public/evgeniy.png";

import headerBg from "../../public/headerBg.png";
import Footer from "@/components/Footer";
import sendReqSvg from "../../public/sendReq.svg";
import AOS from "aos";

import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  AOS.init();

  return (
    <AnimatePresence mode="wait">
      <main>
        <Navbar />
        <div className="min-h-screen grid primary-bg-linear">
          <div className="in-container flex justify-center flex-col text-white">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={`uppercase text-4xl sm:text-5xl lg:text-8xl ${gerhaus.className}`}
            >
              <p>производим</p>
              <p className="w-fit sm:pl-32 mr-auto">ДИЗАЙНЕРСКУЮ</p>
              <p className="">МЕБЕЛЬ</p>
            </motion.div>
            <div
              className={`lg:flex grid gap-6 pt-4 items-center mt-[70px]  text-[#D3D3D3] ${futura.className}`}
            >
              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit
              </motion.p>
              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit
              </motion.p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <Image
              src={headerBg}
              className="w-full h-full object-cover"
              alt="headerBg"
            />
          </div>
        </div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`uppercase in-container text-4xl sm:text-5xl lg:text-8xl mt-14 md:mt-28 ${gerhaus.className}`}
        >
          <p className="">НАШи</p>
          <p className="w-fit sm:pl-32 mr-auto">ПРЕИМУЩЕСТВА</p>
        </motion.div>

        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="lg:grid grid-cols-2 in-container gap-x-3"
        >
          <p
            className={`text-[#595959] lg:text-start text-center mb-5 sm:pr-20 text-[19px] ${futura.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 ml-auto justify-items-center gap-[17px]">
            <HomeCard
              text="Полное сопровождение заказа"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
            />
            <HomeCard
              text="Полное сопровождение заказа"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua."
            />
            <HomeCard
              text="Полное сопровождение заказа"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
            />
            <HomeCard
              text="Полное сопровождение заказа"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>

        <CompanyInfo />

        <CompanyFullBox
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image={companyFullKitchen}
          info="Нижний ярус состоит из:
Тумбы с выдвижными ящиками;СтолешницыБытовой техники"
          subtitle="Что включено:"
          subtitleDesc="Верхний ярус кухни включает в себя:
        КаркасВнутренние полкиФасадыВыдвижные ящики"
          title="КУхНЯ"
        />

        <CompanyFullBox
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image={bedrom}
          info="Нижний ярус состоит из:
Тумбы с выдвижными ящиками;СтолешницыБытовой техники"
          subtitle="Что включено:"
          subtitleDesc="Верхний ярус кухни включает в себя:
        КаркасВнутренние полкиФасадыВыдвижные ящики"
          title="СПАЛЬНЯ"
        />
        <CompanyFullBox
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image={childRoom}
          info="Нижний ярус состоит из:
Тумбы с выдвижными ящиками;СтолешницыБытовой техники"
          subtitle="Что включено:"
          subtitleDesc="Верхний ярус кухни включает в себя:
        КаркасВнутренние полкиФасадыВыдвижные ящики"
          title="детская"
        />
        <CompanyFullBox
          title="ГОСТИНАЯ"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image={hotel}
          info="Нижний ярус состоит из:
Тумбы с выдвижными ящиками;СтолешницыБытовой техники"
          subtitle="Что включено:"
          subtitleDesc="Верхний ярус кухни включает в себя:
        КаркасВнутренние полкиФасадыВыдвижные ящики"
        />

        <div className="in-container">
          <p
            className={`uppercase text-4xl mb-6 sm:text-5xl lg:text-8xl ${gerhaus.className}`}
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-duration="1000"
          >
            ПРИМЕРЫ НАШИХ <br /> РАБОТ
          </p>
          <div className="">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[20px]">
              <Image
                className="w-full rounded-[20px] h-[332px] object-cover"
                src={homeFurniture}
                alt=""
                data-aos="zoom-out-right"
                data-aos-duration="1000"
              />
              <Image
                className="w-full rounded-[20px] h-[332px] object-cover"
                src={homeFurniture}
                data-aos="zoom-out-left"
                data-aos-duration="1000"
                alt=""
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-[20px] my-[20px]">
              <Image
                className="w-full rounded-[20px] h-[332px] object-cover"
                src={homeFurniture}
                alt=""
                data-aos="zoom-out-right"
                data-aos-duration="1000"
              />
              <Image
                className="w-full rounded-[20px] h-[332px] object-cover"
                src={homeFurniture}
                alt=""
                data-aos="zoom-out-up"
                data-aos-duration="1000"
              />
              <Image
                className="third-image-on-grid w-full rounded-[20px] h-[332px] object-cover "
                src={homeFurniture}
                data-aos="zoom-out-left"
                data-aos-duration="1000"
                alt=""
              />
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[20px]">
              <Image
                className="w-full rounded-[20px] h-[332px] object-cover"
                src={homeFurniture}
                data-aos="zoom-out-right"
                data-aos-duration="1000"
                alt=""
              />
              <Image
                className="w-full rounded-[20px] h-[332px] object-cover"
                src={homeFurniture}
                data-aos="zoom-out-left"
                data-aos-duration="1000"
                alt=""
              />
            </div>
          </div>
          <p
            className={`uppercase mt-20 md:mt-40 text-4xl mb-6 sm:text-5xl lg:text-8xl ${gerhaus.className}`}
            data-aos="zoom-out-up"
            data-aos-duration="1000"
          >
            ОТЗЫВЫ
          </p>
          <div className="justify-items-center gap-y-8 grid">
            <div className="lg:flex justify-center gap-x-72">
              <UserComment
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image={commentUser}
                name="ИГОРЬ"
              />
              <UserComment
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image={aleksey}
                name="АЛЕКСЕЙ"
              />
            </div>
            <UserComment
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image={genadiy}
              name="ГЕНАДИЙ"
            />
            <div className="lg:flex justify-center gap-x-72">
              <UserComment
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image={commentUser}
                name="ИГОРЬ"
              />
              <UserComment
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image={aleksey}
                name="АЛЕКСЕЙ"
              />
            </div>
          </div>

          <p
            className={`uppercase mt-20 md:mt-40 text-4xl mb-6 sm:text-5xl lg:text-8xl ${gerhaus.className}`}
            data-aos="zoom-out-right"
            data-aos-duration="1000"
          >
            популярные <br /> вопросы
          </p>
          <div
            data-aos="zoom-out-right"
            data-aos-duration="1000"
            className="lg:flex mb-10 mt-16 md:mb-24 gap-x-28 items-start"
          >
            <div className="flex-[55%] flex-grow-0 max-lg:mb-10">
              <AccordionDemo />
            </div>
            <div className="max-lg:grid max-lg:max-w-96 max-lg:mx-auto">
              <BlackBtn text="ЗАДАТЬ ВОПРОС" />
            </div>
          </div>
        </div>

        <div
          className="relative"
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          <div className="max-container relative text-white justify-items-center grid pt-24">
            <p
              className={`uppercase max-xl:py-12 text-4xl mb-6 sm:text-5xl lg:text-8xl text-center ${gerhaus.className}`}
            >
              отправьте <br className="max-xl:hidden" /> заявку
            </p>
            <p className={`text-center xl:mx-60 mt-[26px] ${futura.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit
            </p>
            <div className="max-xl:w-full grid xl:grid-cols-2 gap-10 mt-20 items-center">
              <input
                type="text"
                className="bg-inherit outline-none border-b w-full p-3 pl-1"
                placeholder="ИМЯ"
              />
              <input
                type="text"
                className="bg-inherit outline-none border-b w-full p-3 pl-1"
                placeholder="НОМЕР ТЕЛЕФОНА"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.3}
              stroke="currentColor"
              className="aspect-square w-24 md:w-52 mt-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="absolute top-0 left-0 z-[-1] h-full w-full">
            <Image
              className="w-full h-full object-bottom object-cover max-w-[1920px] mx-auto"
              src={sendReqSvg}
              alt="sendReqSvg"
            />
          </div>
        </div>

        <div className="in-container">
          <p
            className={`${gerhaus.className} uppercase mt-20 md:mt-40 text-4xl mb-6 sm:text-5xl lg:text-8xl`}
          >
            КОНТАКТЫ
          </p>
          <div className="xl:flex grid gap-[21px] mb-[87px]">
            <div
              className="xl:w-[670px]"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            >
              <Image
                className="object-cover w-full rounded-[20px]"
                src={map}
                alt=""
              />
              <ContactBox />
            </div>
            <Connection />
          </div>
        </div>
        <Footer />
      </main>
    </AnimatePresence>
  );
}
