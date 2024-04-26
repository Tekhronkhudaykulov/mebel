import Image, { StaticImageData } from "next/image";
import Futura from "next/font/local";
const futura = Futura({ src: "../fonts/futura.ttf" });

type TUserComment = {
  name: string;
  image: StaticImageData;
  description: string;
};

function UserComment({ description, image, name }: TUserComment) {
  return (
    <div
      className="w-[280px]"
      data-aos="zoom-out-right"
      data-aos-duration="1000"
    >
      <Image
        className="w-[280px] h-[280px] mb-3 rounded-full"
        src={image}
        alt=""
      />
      <h4 className={`text-[#374045] font-bold text-3xl ${futura.className}`}>
        {name}
      </h4>
      <p className={`text-sm mt-2 text-[18px] ${futura.className}`}>
        {description}
      </p>
    </div>
  );
}
export default UserComment;
