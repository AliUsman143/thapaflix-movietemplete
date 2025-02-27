"use client";
import React from "react";
import { MegaMenu, Navbar } from "flowbite-react";
import Link from "next/link";

const Headerr = () => {
  return (
    <>
      <MegaMenu className="border-b-2 shadow-xl p-4 h-20 items-center text-center mt-3">
        <Navbar.Brand href="/" className="px-12">
          <img alt="" src="img/logo.png" className="mr-3 h-6 sm:h-9" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="px-12">
          <Navbar.Link  as={Link}  href="/"className="text-red-600 font-bold ">
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="/about">About</Navbar.Link>
          <Navbar.Link as={Link} href="/movie">Movies</Navbar.Link>
          <Navbar.Link as={Link} href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </MegaMenu>
    </>
  );
};

export default Headerr;
