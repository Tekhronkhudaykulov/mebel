"use client";
import { useClickAway } from "react-use";

import { useRef, useState } from "react";
import Btn from "./Btn";
import { MobileMenu } from "./MobileMenu";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export const navDatas = [
  {
    name: "Преимущества",
    goTo: "advantages",
  },
  {
    name: "О компании",
    goTo: "about",
  },
  {
    name: "Услуги",
    goTo: "services",
  },
  {
    name: "Галерея",
    goTo: "gallery",
  },
  {
    name: "Отзывы",
    goTo: "reviews",
  },
  {
    name: "Контакты",
    goTo: "contacts",
  },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <header className="absolute top-0 left-0 w-full">
        <div className="max-container flex items-center justify-between">
          <motion.a initial={{ y: -100 }} animate={{ y: 0 }} href="/">
            <img src="/logo.svg" alt="" />
          </motion.a>
          <nav className="text-white">
            <ul className="lg:flex hidden mx-6 flex-wrap gap-x-8 text-lg uppercase">
              {navDatas.map((nav, index) => (
                <motion.li
                  key={nav.name}
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <a href={`#${nav.goTo}`}>{nav.name}</a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="lg:hidden "
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Hamburger toggled={isOpen} size={28} toggle={setOpen} />
            </motion.div>
          </nav>
          <motion.div
            className="lg:block hidden text-white"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            <a
              href="tel:+998949187177"
              className="py-[11px] hover:bg-white hover:text-black hover:border-black px-[22px] border transition-all rounded-[30px]"
            >
              Позвонить
            </a>
          </motion.div>
        </div>
      </header>
      {isOpen && <MobileMenu isOpen={isOpen} />}
    </div>
  );
}
export default Navbar;
