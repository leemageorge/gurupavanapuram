'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/images/redlogo.png'
import facebook from "../../public/facebook.svg"
import instagram from "../../public/instagram.svg"
import menu from "../../public/menu2.svg"
import { navLinks, sercicesDropdown } from '@/data/data'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-amber-300 backdrop-blur/40 z-50 ">
      <div className="container mx-auto h-full px-4 md:px-8 flex items-center justify-between text-red-700 ">
        
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image src={Logo} width={150} height={150} alt='logo' />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <Image src={menu} width={35} height={35} alt="menu" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            link.title === "Services" ? (
              <div className="relative group" key={link.title}>
                <span className="cursor-pointer text-lg font-bold ">{link.title}</span>
                <div className="absolute top-full left-0 hidden group-hover:flex flex-col gap-2 bg-amber-300 text-red-700 shadow-md rounded-md min-w-[200px] text-base py-2 z-50">
                  {sercicesDropdown.map((list) => (
                    <Link href={list.url} key={list.title} className="px-4 py-1 hover:bg-red-700 hover:text-amber-300 rounded-full transition ease-in-out">
                      {list.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link href={link.url} key={link.title} className="cursor-pointer text-lg font-bold">
                {link.title}
              </Link>
            )
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="#"><Image src={facebook} width={40} height={40} alt='facebook' /></Link>
          <Link href="#"><Image src={instagram} width={40} height={40} alt='instagram' /></Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" bg-amber-300 min-h-screen  text-red-700 px-4 py-4 flex flex-col gap-4 font-bold">
          {navLinks.map((link) => (
            link.title === "Services" ? (
              <div key={link.title}>
                <div className="font-semibold">{link.title}</div>
                <div className="ml-4 flex flex-col gap-2 text-base text-red-700">
                  {sercicesDropdown.map((list) => (
                    <Link href={list.url} key={list.title} className="hover:underline  hover:bg-red-700 hover:text-amber-300 rounded-full px-4 py-1 w-fit">{list.title}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link href={link.url} key={link.title} className="text-lg">{link.title}</Link>
            )
          ))}

          {/* Mobile Social Links */}
          <div className="flex gap-4 pt-4">
            <Link href="#"><Image src={facebook} width={40} height={40} alt='facebook' /></Link>
            <Link href="#"><Image src={instagram} width={40} height={40} alt='instagram' /></Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
