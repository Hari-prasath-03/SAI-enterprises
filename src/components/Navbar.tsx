import { AnimatePresence, motion } from "motion/react";
import { Fragment, useState } from "react";

import logo from "../assets/logo.svg";
import { twitter, linkedin, youtube, facebook, ham, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navExtraPages = ["Support", "Partners", "Careers"];
  const socialMedia = [
    { icon: twitter, link: "#" },
    { icon: facebook, link: "#" },
    { icon: linkedin, link: "#" },
    { icon: youtube, link: "#" },
  ];

  const nav = [
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio-archive" },
    { name: "Service", link: "/service" },
    { name: "Project", link: "/project" },
    { name: "Contact us", link: "/contact" },
  ];

  const handleHamburgerClick = () => setIsMenuOpen((pv) => !pv);

  return (
    <div className="w-full shadow">
      <nav className="container flex relative">
        {/* Left Logo */}
        <Link to="/" className="h-16 sm:h-20 md:h-26">
          <img src={logo} alt="Logo" className="object-cover h-full" />
        </Link>

        {/* Desktop */}
        <div className="w-full flex-1 px-7 hidden sm:flex flex-col">
          {/* top bar */}
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

          {/* bottom nav links */}
          <div className="self-end flex h-full items-center px-1 flex-1 overflow-hidden">
            <ul className="flex items-center gap-8 text-base font-medium *:cursor-pointer *:text-violet">
              {nav.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ y: 50, opacity: 0.1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <Link to={item.link}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div
          onClick={handleHamburgerClick}
          className="sm:hidden flex-1 flex justify-end items-center"
        >
          <img src={isMenuOpen ? close : ham} className="size-8" alt="menu" />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait" initial={false}>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="sm:hidden absolute z-50 top-16 right-0 left-0 bg-bg border-b border-gray-200 overflow-hidden"
            >
              <ul className="flex flex-col text-center p-6">
                {nav.map((item, i) => (
                  <Fragment key={i}>
                    <motion.li
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-violet font-medium py-3"
                      onClick={handleHamburgerClick}
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </motion.li>
                    <hr className="opacity-10" />
                  </Fragment>
                ))}

                {/* Extra Pages */}
                <div className="mt-6">
                  <p className="text-gray-500 text-sm mb-2 font-medium">More</p>
                  <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                    {navExtraPages.map((page, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 border border-gray-300 rounded-full cursor-pointer"
                      >
                        {page}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-6 flex justify-center gap-5">
                  {socialMedia.map(({ icon, link }, i) => (
                    <motion.a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <img
                        src={icon}
                        alt="Social Media"
                        className="size-5 opacity-80 hover:opacity-100"
                      />
                    </motion.a>
                  ))}
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
