import Futura from "next/font/local";
const futura = Futura({ src: "../fonts/futura.ttf" });
import Gerhaus from "next/font/local";
const gerhaus = Gerhaus({ src: "../fonts/gerhaus/gerhaus.ttf" });

function Connection() {
  return (
    <div
      className="bg-[#EEEEEE] p-5 sm:px-12 rounded-[20px] xl:max-w-[528px]"
      data-aos="zoom-in-left"
      data-aos-duration="1000"
    >
      <p
        className={`uppercase text-4xl sm:text-[45px] text-[#262626] text-center xl:text-start ${gerhaus.className}`}
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
            <input type="radio" id="boss" name="drone" value="boss" checked />
            <label htmlFor="boss">Владелец </label>
          </div>
          <div className="ml-[20px]">
            <input
              type="radio"
              id="designer"
              name="drone"
              value="designer"
              checked
            />
            <label htmlFor="designer">Дизайнер</label>
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
  );
}
export default Connection;
