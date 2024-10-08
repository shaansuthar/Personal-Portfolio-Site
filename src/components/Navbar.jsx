import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link href='/'>
          <div
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image src={logo} alt='logo' width={36} height={36} />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              Shaan &nbsp;
              <span className='sm:block hidden'> Suthar</span>
            </p>
          </div>
        </Link>

        <ul className='list-none hidden xl:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.link}`} target={nav.target || "_self"}>
                {nav.title}
              </a>
            </li>
          ))}

          {/* GitHub and LinkedIn Icons */}
          <li>
            <a
              href="https://github.com/shaansuthar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[24px] hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/shaan-suthar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[24px] hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>

        <div className='xl:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            width={28}
            height={28}
            className='object-contain cursor-pointer'
            style={{ width: "auto", height: "auto" }}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {/* Conditional rendering for external vs internal links */}
                  {nav.target ? (
                    <a href={nav.link} target={nav.target} rel="noopener noreferrer">
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}

              {/* Icons in mobile menu */}
              <li>
                <a
                  href="https://github.com/shaansuthar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[24px] hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/shaan-suthar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[24px] hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
