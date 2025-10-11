import { rightArrow } from "../../assets";
import Reveal from "./Reveal";

const Button = ({ className }: { className?: string }) => {
  return (
    <Reveal>
      <button
        className={`bg-violet text-white py-2.5 px-8 sm:px-10 w-fit inline-flex gap-3 items-center ${className}`}
      >
        <span>Learn more</span>
        <img src={rightArrow} className="mt-0.5" alt="right arrow" />
      </button>
    </Reveal>
  );
};

export default Button;
