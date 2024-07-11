import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";
const NavBar = () => {
 const [show, setShow] = useState(true);
 let lastScrollY = window.scrollY;

 const handleScroll = () => {
   if (window.scrollY > lastScrollY && window.scrollY >= 40) {
    setShow(false);
   } else {
    setShow(true);
   }
  lastScrollY = window.scrollY;
 };

 useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [lastScrollY]);

 return (
  <nav
   className={`fixed w-full top-0 bg-black px-5  py-4 transform transition-transform duration-500 ease-in-out border-b-[1px] border-third flex items-center justify-between z-30  ${
    show ? "translate-y-0 " : "-translate-y-full"
   }`}
  >
   <Link to='home' smooth={true} offset={-200} className='cursor-pointer'>
    <img src={Logo} alt='Locus' className='w-12 h-12 md:w-16 md:h-16' />
   </Link>
   <div className=' hidden sm:flex justify-between w-[50%] md:w-[40%] md:max-w-[350px]'>
    <Link
     to='home'
     smooth={true}
     className='cursor-pointer text-base sm:text-xl'
     offset={-200}
    >
     Home
    </Link>
    <Link
     to='locus'
     smooth={true}
     className='cursor-pointer text-sm sm:text-xl'
     offset={-100}
    >
     Locus
    </Link>
    <Link
     to='testimonials'
     smooth={true}
     className='cursor-pointer text-sm sm:text-xl'
     offset={-200}
    >
     Testimonials
    </Link>
    <Link
     to='contact'
     smooth={true}
     className='cursor-pointer text-sm sm:text-xl'
     offset={-200}
    >
     Contact
    </Link>
   </div>
   <div
    id='hamburger'
    className='flex flex-col gap-y-2 cursor-pointer sm:hidden '
   >
    <div className='h-1 w-8 border rounded-full'></div>
    <div className='h-1 w-8 border rounded-full'></div>
   </div>
  </nav>
 );
};

export default NavBar;
