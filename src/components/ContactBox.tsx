import {Clock, Mail, MapPin, Phone} from "lucide-react"
import Atyp from "next/font/local"
const atyp = Atyp({src: "../fonts/atyp.ttf"})

import Futura from "next/font/local"
const futura = Futura({src: "../fonts/futura.ttf"})

function ContactBox() {
  return (
    <div className="grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center justify-between  gap-[13px] mt-5">
      <div className="lg:max-w-[209px] w-full h-[180px] bg-[#EEEEEE] p-6 rounded-[20px]">
        <p
          className={`text-[19px] font-black text-[#262626] ${atyp.className}`}
        >
          Наш адрес:
        </p>
        <p className="flex items-center gap-x-2 mt-[18px]">
          
          <MapPin />
          <span
            className={`text-[#727272] font-medium text-[15px] ${futura.className}`}
          >
            Адрес
          </span>
        </p>
      </div>
      <div className="lg:max-w-[209px] w-full h-[180px] bg-[#EEEEEE] p-6 rounded-[20px]">
        <p
          className={`text-[19px] font-black text-[#262626] ${atyp.className}`}
        >
          Часы работы:
        </p>
        <div className="flex flex-[2] items-center gap-x-2">
          <Clock width={40} />
          <p
            className={`text-[#727272] mt-[18px] font-medium text-[15px] ${futura.className}`}
          >
            Ежедневно с 10:00 до 20:00
          </p>
        </div>
      </div>
      <div className="lg:max-w-[209px] w-full h-[180px] bg-[#EEEEEE] p-6 rounded-[20px]">
        <p
          className={`text-[19px] font-black text-[#262626] ${atyp.className}`}
        >
          Наши контакты:
        </p>
        <div className="flex flex-[2] items-center gap-x-2">
          <Phone className="ml-2" width={40} />
          <p
            className={`text-[#727272] mt-[18px] font-medium text-[15px] ${futura.className}`}
          >
            +998 99 999 99 99 +998 99 999 99 99
          </p>
        </div>
        <div className="flex items-center mt-3">
          <Mail width={40} />
          <p
            className={`text-[#727272] font-medium text-[15px] ${futura.className}`}
          >
            Текст
          </p>
        </div>
      </div>
    </div>
  )
}
export default ContactBox
