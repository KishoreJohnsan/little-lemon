"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Citrus } from "lucide-react";

import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

interface NavItem {
  name: string;
  href?: string;
  hash?: string;
}

const navItems: NavItem[] = [
  { name: "Home", hash: "home" },
  { name: "About", hash: "about" },
  { name: "Menu", hash: "menu" },
  { name: "Reservations", href: "/reservations" },
];

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: 0, opacity: 1 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-10 transition-all duration-300"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "animate"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "transparent",
        boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link className="flex items-center space-x-2" to={"/"}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-green-700">
                <Citrus className="h-8 w-8 text-green-800 fill-yellow-300" />
              </div>
              <span className="bg-gradient-to-b from-green-500 to-green-700 bg-clip-text text-2xl font-bold text-transparent">
                Little Lemon
              </span>
            </Link>
          </motion.div>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <Button key={item.name} variant="link" effect="hoverUnderline" className="relative text-md" asChild>
                <Link
                  to={item.href ? item.href : "/"}
                  hash={item.hash ? item.hash : ""}
                  className="flex items-center space-x-1  font-bold text-foreground transition-colors duration-200 hover:text-green-700"
                  viewTransition = {item.name === 'Reservations' ? true : false}
                >
                  <span>{item.name}</span>
                </Link>
              </Button>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <Button effect="ringHover" variant="outline" className="text-md">
            <Link
              className="font-medium text-foreground transition-colors duration-200"
              to={"/"}
            >
              Order Online
            </Link>
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button effect="expandIcon" icon={ArrowRight} iconPlacement="right" className="bg-gradient-to-b from-yellow-400 to-amber-400 text-black text-md" asChild>
              <Link
                to={"/"}
              >
                <span>Login</span>
              </Link>
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-muted lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Main Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-background/95 py-4 shadow-xl backdrop-blur-lg">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href ? item.href : "/"}
                    hash={item.hash ? item.hash : ""}
                    className="block px-4 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="space-y-2 px-4 py-2">
                  <Link
                    className="block w-full rounded-lg py-2.5 text-center font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                    to={"/"}
                  >
                    Order Online
                  </Link>
                  <Link
                    className="block w-full rounded-lg bg-gradient-to-b from-yellow-400 to-amber-400 py-2.5 text-center font-medium text-black transition-all duration-200 hover:shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                    to={"/"}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
