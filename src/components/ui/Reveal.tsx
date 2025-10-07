/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface RevealProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}
const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", ...props }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef, { once: true, margin: "-60px" });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  const mainVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  //   const slideVariants = {
  //     hidden: { left: 0 },
  //     visible: { left: "100%" },
  //   };

  return (
    <div
      ref={targetRef}
      style={{ position: "relative", width, overflow: "hidden" }}
      {...props}
    >
      <motion.div
        variants={mainVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1 bottom-1 left-0 right-0 bg-primary z-20"
      /> */}
    </div>
  );
};

export default Reveal;
