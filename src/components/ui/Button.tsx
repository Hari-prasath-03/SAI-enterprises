import { motion } from "motion/react";

import Reveal from "./Reveal";
import { rightArrow } from "../../assets";

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <Reveal>
      <motion.button
        whileHover="hover"
        className={`text-white py-2.5 px-8 sm:px-10 w-fit inline-flex gap-3 items-center cursor-pointer ${className}`}
      >
        <span>{children}</span>
        <motion.img
          variants={{ hover: { x: 5 } }}
          src={rightArrow}
          className="mt-0.5"
          alt="right arrow"
        />
      </motion.button>
    </Reveal>
  );
};

export default Button;
