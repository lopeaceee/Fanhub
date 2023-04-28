import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import navLinks from "../../data/navLinks";
import { motion, AnimatePresence } from "framer-motion";
import { parentVariants, childVariants } from "../../animations/common";
import {
  mobileContainer,
  mobileFlexContainer,
  mobileLinkVariants,
} from "../../animations/mobileNav";
import { useNavigate, useLocation } from "react-router-dom";

import Link from 'next/link'

import { ethers } from "ethers";

import {useRouter} from 'next/router'

import logo from "../../assets/logo.png"
import Image from 'next/image';

function Navbar() {
  // const location = useLocation();
  const location = useRouter;
  const [nav, setNav] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  // const navigate = useNavigate();

  console.log("location: ", location);

  const connectWallet = () => {
    // if (window.ethereum) {
    //   window.ethereum
    //     .request({ method: "eth_requestAccounts" })
    //     .then((result) => {
    //       console.log(result);
    //       accountChanged([result[0]]);
    //     });
    // } else {
    //   setErrorMessage("Install Metamask please !!!");
    // }
  };

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
  };

  const toggleNav = () => {
    setNav((prev) => {
      return !prev;
    });
  };
  const styles = {
    btn: "px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700",
    navLink: "hover:text-indigo-600 duration-200 ease-in-out cursor-pointer",
    mobileNavLink:
      "hover:text-indigo-600 duration-200 ease-in-out border-b border-white text-center cursor-pointer",
  };

  return (
    <>
      <nav className="p-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl relative">
          {/* Flex Container */}

          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate="show"
            className="flex justify-between items-center text-white"
          >
            {/* Logo */}
            <motion.h1
              variants={childVariants}
              className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400"
            >
              {/* <span className="">Fan</span>Hub */}
              <Image src={logo}></Image>
            </motion.h1>
            {/* Menu Items */}
            <motion.div
              variants={childVariants}
              className="hidden lg:flex space-x-6 text-sm items-center"
            >
              {navLinks.map((link, idx) => {
                return (
                  <a
                    key={idx}
                    onClick={(e) => {
                      console.log(location.pathname);
                      e.preventDefault();
                      // const truePath = link === "Home" ? "/" : "/" + link;
                      // if (location.pathname !== truePath) {
                      navigate(link === "Home" ? "/" : "/" + link);
                      // }
                    }}
                    className={styles.navLink}
                  >
                    {link}
                  </a>
                );
              })}

              <button className={styles.btn} onClick={connectWallet()}>
                {defaultAccount ? defaultAccount : "Connect Wallet"}
              </button>
            </motion.div>
            {/* Hamburger Menu */}
            <motion.div
              variants={childVariants}
              className="lg:hidden"
              onClick={toggleNav}
            >
              {nav ? (
                <IoClose size={28} className="text-white" />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </motion.div>
            {/* Mobile Menu */}
            <AnimatePresence>
              {nav && (
                <motion.div
                  variants={mobileContainer}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="absolute top-14 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 z-50 w-full px-28 py-8 rounded-lg"
                >
                  <motion.div
                    variants={mobileFlexContainer}
                    className="flex flex-col items-center space-y-6 "
                  >
                    {navLinks.map((link, idx) => {
                      return (
                        <motion.a
                          variants={mobileLinkVariants}
                          key={idx}
                          className={styles.mobileNavLink}
                          onClick={(e) => {
                            e.preventDefault();
                            // const truePath = link === "Home" ? "/" : "/" + link;
                            // if (location.pathname !== truePath) {
                            navigate(link === "Home" ? "/" : "/" + link);
                            // }
                          }}
                        >
                          {link}
                        </motion.a>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
