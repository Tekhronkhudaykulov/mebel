import { navDatas } from "./Navbar";
import { motion } from "framer-motion";

export const MobileMenu = ({ isOpen }: any) => {
  return (
    <>
      <motion.menu
        className={`w-full absolute top-20 right-0 backdrop-blur-sm bg-black h-[100vh]`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="py-12 text-white text-start">
          {navDatas.map(({ goTo, name }, index) => (
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.15 }}
              className="m-4"
              key={index}
            >
              <a className="text-3xl text-start" href={`#${goTo}`}>
                {name}
              </a>
            </motion.li>
          ))}
        </div>
      </motion.menu>
    </>
  );
};
