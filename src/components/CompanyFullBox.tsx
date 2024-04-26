import Image, { StaticImageData } from "next/image";
import Gerhaus from "next/font/local";
const gerhaus = Gerhaus({ src: "../fonts/gerhaus/gerhaus.ttf" });
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Futura from "next/font/local";
import BlackBtn from "./BlackBtn";
import { useState } from "react";
import Connection from "./Connection";
import CloseIcon from "@mui/icons-material/Close";
const futura = Futura({ src: "../fonts/futura.ttf" });

type TCompanyFullBox = {
  title: string;
  image: StaticImageData;
  description: string;
  subtitle: string;
  subtitleDesc: string;
  info: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 450,
  width: "100%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function CompanyFullBox({
  image,
  title,
  description,
  info,
  subtitle,
  subtitleDesc,
}: TCompanyFullBox) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="grid justify-items-center mb-16">
      <p
        className={`uppercase lg:text-[90px] md:text-[70px] sm:text-[50px] text-[30px] ${gerhaus.className}`}
      >
        {title}
      </p>
      <Image
        src={image}
        className="object-cover md:object-contain xl:block hidden"
        alt=""
      />
      <Image
        src={image}
        className="min-h-96 lg:object-contain xl:hidden block rounded-3xl in-container max-w-[800px] object-cover"
        alt=""
      />
      <div
        className={`grid lg:grid-cols-2 gap-x-[100px] items-center my-5 lg:my-14 in-container ${futura.className}`}
      >
        <p className="text-lg max-lg:mb-5">{description}</p>
        <div className="grid sm:grid-cols-2 gap-3 items-center">
          <h5 className="text-[#374045] font-bold text-[25px]">
            {subtitle}
            <p className="text-[18px]">{subtitleDesc}</p>
          </h5>
          <p className="w-[240px] text-[18px]" data-aos-duration="1000">
            {info}
          </p>
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="py-[11px] hover:bg-black hover:text-white hover:border-white transition-all border-[#262626] text-black px-[22px] border rounded-[30px]"
      >
        Заказать
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="sm:px-12 !p-0 rounded-[20px] xl:max-w-[528px] relative"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <div
              className="absolute right-[-5%] top-[-8%]"
              onClick={handleClose}
            >
              <CloseIcon style={{ fontSize: "30px" }} />
            </div>
            <p
              className={`uppercase text-4xl sm:text-[45px] text-[#262626] mt-[20px] text-center xl:text-start ${gerhaus.className}`}
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            >
              Обратная связь
            </p>
            <p
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className={`${futura.className} text-[15px] text-center xl:text-start text-[#727272] mt-7`}
            >
              Напишите нам свое предложение или пожелание:
            </p>
            <div className="grid">
              <input
                type="text"
                className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
                placeholder="Ваше имя*"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              />
              <input
                type="text"
                className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
                placeholder="Ваш телефон*"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              />
              <input
                type="text"
                className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
                placeholder="Комментарий*"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              />
              <div className="flex mt-9">
                <div>
                  <input
                    type="radio"
                    id="modalBoss"
                    name="drone"
                    value="modalBoss"
                    checked
                  />
                  <label htmlFor="modalBoss">Владелец </label>
                </div>
                <div className="ml-[20px]">
                  <input
                    type="radio"
                    id="modalDesigner"
                    name="drone"
                    value="modalDesigner"
                    checked
                  />
                  <label htmlFor="modalDesigner">Дизайнер</label>
                </div>
              </div>
              <button
                className={`bg-[#262626] rounded-[6px] font-bold text-[17px] hover:opacity-85 transition-all py-4 px-16 sm:px-36 text-white mt-14 ${futura.className}`}
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                Отправить
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default CompanyFullBox;
