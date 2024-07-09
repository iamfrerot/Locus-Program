import { Link } from "react-scroll";
import photo1 from "../assets/photo1.jpg";
const Hero = () => {
 return (
  <section
   id='home'
   className='h-[85vh] px-4 w-screen flex items-center justify-between md:gap-x-20 md:justify-center lg:gap-x-[200px]'
  >
   <div className='md:w-[300px] flex flex-col items-start gap-y-3'>
    <p className='leading-snug text-5xl lg:leading-tight lg:text-7xl  uppercase '>
     Empower Your Future
    </p>
    <blockquote className='text-[12px] sm:text-lg  opacity-35 lg:w-[200px]'>
     "start and scale your business to transform your life and family"
    </blockquote>
    <Link
     to='contact'
     className='rounded-2xl border-2 border-white bg-black px-6 py-3 font-semibold uppercase text-white  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer'
    >
     Ready
    </Link>
   </div>
   <img src={photo1} alt='Profile' className=' h-full hidden md:block' />
  </section>
 );
};

export default Hero;
