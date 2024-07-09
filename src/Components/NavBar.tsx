import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";
const NavBar = () => {
 const [show, setShow] = useState(true);
 let lastScrollY = window.scrollY;

 const handleScroll = () => {
  if (window.scrollY > lastScrollY) {
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
   className={`fixed top-0 w-screen bg-black px-5  py-4 transform transition-transform duration-500 ease-in-out border-b-[1px] border-third flex items-center justify-between  ${
    show ? "translate-y-0" : "-translate-y-full"
   }`}
  >
   <Link to='/' className='cursor-pointer'>
    <img src={Logo} alt='Locus' className='w-12 h-12 md:w-16 md:h-16' />
   </Link>
   <div className=' hidden sm:flex justify-between w-[50%] md:w-[40%] md:max-w-[350px]'>
    <Link to='/' smooth={true} className='cursor-pointer text-base sm:text-xl'>
     Home
    </Link>
    <Link
     to='locus '
     smooth={true}
     className='cursor-pointer text-sm sm:text-xl'
    >
     Locus
    </Link>
    <Link
     to='testimonials'
     smooth={true}
     className='cursor-pointer text-sm sm:text-xl'
    >
     Testimonials
    </Link>
    <Link
     to='contact'
     smooth={true}
     className='cursor-pointer text-sm sm:text-xl'
    >
     Contact
    </Link>
   </div>
   <div className='flex flex-col gap-y-2 cursor-pointer sm:hidden '>
    <div className='h-1 w-8 border rounded-full'></div>
    <div className='h-1 w-8 border rounded-full'></div>
   </div>
  </nav>
 );
};

export default NavBar;
