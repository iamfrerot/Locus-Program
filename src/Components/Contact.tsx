import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
 return (
  <section className='w-full flex flex-col items-center px-6' id='contact'>
   <h1 className='text-3xl mb-10'>Contact</h1>
   <form className='mb-12 md:w-[70%] lg:w-[40%]'>
    <p className='text-xl'>Get In touch</p>
    <p className='text-[12px] opacity-[0.70] font-thin'>
     Don’t let procrastination stand in the way of your entrepreneurial dreams.
     Take the first step towards launching and scaling your business quickly and
     effectively.
    </p>
    <input
     type='text'
     placeholder='Name'
     className='mt-8 w-full border-b-2 bg-transparent pl-2 outline-none border-third'
    />
    <input
     type='email'
     placeholder='E-mail'
     className='mt-8 w-full border-b-2 bg-transparent pl-2 outline-none border-third'
    />
    <input
     type='text'
     placeholder='Subject'
     className='mt-8 w-full border-b-2 bg-transparent pl-2 outline-none border-third'
    />
    <textarea
     name='Message'
     className='mt-8 w-full border-b-2 bg-transparent pl-2 outline-none border-third'
     placeholder='Message'
    ></textarea>
    <button className='rounded-2xl border-2 border-white bg-transparent px-6 py-3 uppercase text-white  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer w-full mt-10 '>
     Send
    </button>
    <div className='mt-5 flex flex-col sm:flex-row justify-between gap-y-4'>
     <a href='tel:+250785289785' className='flex items-center gap-x-3 '>
      <FaPhoneVolume color='white' className='text-xl' />
      +250785289785
     </a>
     <a
      href='mailto: nkunzurwandasalim6@gmail.com'
      className='flex items-center gap-x-3'
     >
      <MdEmail color='white' className='text-2xl' />
      nkunzurwandasalim6@gmail.com
     </a>
    </div>
   </form>
  </section>
 );
};

export default Contact;
