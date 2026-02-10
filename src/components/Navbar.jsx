'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/images/redlogo.png'
import facebook from "../../public/facebook.svg"
import instagram from "../../public/instagram.svg"
import menu from "../../public/menu2.svg"
import { navLinks } from '@/data/data'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-amber-300 backdrop-blur/40 z-50">
      <div className="container mx-auto h-20 px-4 md:px-8 flex items-center justify-between text-red-700 overflow-hidden ">
        
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image src={Logo} width={150} height={150} alt='logo' />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (  <span className="text-3xl font-bold text-red-700">✕</span>):(  <Image src={menu} width={35} height={35} alt="menu" />)}
        
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
        
              <Link href={link.url} key={link.title} className="cursor-pointer text-lg font-bold">
                {link.title}
              </Link>
            // )
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
        <div className=" bg-amber-300 h-fit items-center    text-red-700 px-4 py-4 flex flex-col gap-4 font-bold">
          {navLinks.map((link) => (
           
              <Link href={link.url} key={link.title} className="text-lg" onClick={() => setMenuOpen(false)}>{link.title}</Link>
            
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
