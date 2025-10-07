import { motion } from "motion/react";

import logo from "../assets/logo.svg";
import { twitter, linkedin, youtube, facebook } from "../assets";

const Navbar = () => {
  const navExtraPages = ["Support", "Partners", "Careers"];
  const socialMedia = [
    { icon: twitter, link: "#" },
    { icon: facebook, link: "#" },
    { icon: linkedin, link: "#" },
    { icon: youtube, link: "#" },
  ];

  const nav = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#service" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    { name: "Testimonials", link: "#testimonials" },
  ];

  return (
    <div className="w-full shadow div">
      <nav className="container flex">
        {/* left */}
        <div className="h-26">
          <img src={logo} alt="Logo" className="object-cover h-full" />
        </div>
        {/* right */}
        <div className="w-full flex-1 px-7 flex flex-col">
          {/* right-top */}
          <div className="flex justify-between items-center border-b border-gray-200 px-1 py-3 overflow-hidden">
            <ul className="flex gap-6 text-sm">
              {navExtraPages.map((page, index) => (
                <li
                  key={index}
                  className="text-text/80 hover:text-text cursor-pointer"
                >
                  {page}
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-4">
              {socialMedia.map(({ icon, link }, i) => (
                <a key={i} className="*:cursor-pointer" href={link}>
                  <motion.img
                    src={icon}
                    alt="Social Media"
                    className="size-3.5"
                    initial={{ y: 50, opacity: 0.1 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                  />
                </a>
              ))}
            </ul>
          </div>
          {/* right-bottom */}
          <div className="self-end flex h-full items-center px-1 flex-1 overflow-hidden">
            <ul className="flex items-center gap-8 text-base font-medium *:cursor-pointer *:text-violet">
              {nav.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  initial={{ y: 50, opacity: 0.1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="cursor-pointer"
                >
                  {item.name}
                </motion.a>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
