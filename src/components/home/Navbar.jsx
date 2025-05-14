
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import logo from '../../assets/logo.jpg';
import './Navbar.css';
import Button from '../utils/Button';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar bg-gray-900 text-white fixed top-0 left-0 w-full z-[999] shadow-md px-6 py-4 flex justify-between items-center">
      <div className="logo text-yellow-500 text-xl font-bold">PMC</div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        <div className="links flex gap-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact">

        <Button text="Book Appointment" />
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden text-2xl cursor-pointer z-[1001]" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden z-[1000]`}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#reviews" onClick={closeMenu}>Reviews</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <Button text="Book Appointment" />
      </div>
    </div>
  );
}

export default Navbar;
