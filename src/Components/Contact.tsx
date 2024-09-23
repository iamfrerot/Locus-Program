import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import emailJs from '../utils/emailJs';
import toast from 'react-hot-toast';

export type formFields = {
 name: string;
 email: string;
 subject: string;
 message: string;
};

const Contact = () => {
 const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
 } = useForm<formFields>();
 const sendEmail: SubmitHandler<formFields> = async (data) => {
  const toastId = toast.loading('Sending');
  const response = await emailJs(data);
  reset({
   name: '',
   email: '',
   subject: '',
   message: '',
  });
  if (response?.message === 'Error Sending Email') {
   toast.dismiss(toastId);
   toast.error(response?.message);
   return;
  }
  toast.dismiss(toastId);
  toast.success(response?.message as string);
 };
 return (
  <section className="w-full flex flex-col items-center px-6" id="contact">
   <h1 className="text-3xl mb-10">Contact</h1>
   <form
    className="mb-12 md:w-[70%] lg:w-[40%]"
    onSubmit={handleSubmit(sendEmail)}
   >
    <p className="text-xl">Get In touch</p>
    <p className="text-[16px] opacity-[0.70] font-thin">
     Don’t let procrastination stand in the way of your entrepreneurial dreams.
     Take the first step towards launching and scaling your business quickly and
     effectively.
    </p>
    <input
     type="text"
     placeholder="Name"
     className="mt-8 w-full border-b-2 bg-transparent pl-2 outline-none border-third rounded-nonex"
     {...register('name', {
      required: true,
     })}
     disabled={isSubmitting}
    />
    {errors.name && <p className="text-red-500 text-sm">Required</p>}
    <input
     type="email"
     placeholder="E-mail"
     className="mt-8 w-full border-b-2 bg-transparent pl-2 outline-none border-third rounded-none"
     {...register('email', {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
      required: true,
     })}
     disabled={isSubmitting}
    />
    {errors.email && <p className="text-red-500 text-sm">Invalid email</p>}
    <input
     type="text"
     placeholder="Subject"
     className="mt-8 w-full border-b-2 bg-transparent pl-2 outline-none border-third rounded-none"
     {...register('subject', {
      required: true,
     })}
     disabled={isSubmitting}
    />
    {errors.subject && <p className="text-red-500 text-sm">Required</p>}
    <textarea
     className="mt-8 w-full border-b-2 bg-transparent pl-2 outline-none border-third rounded-none"
     placeholder="Message"
     {...register('message', {
      required: true,
     })}
     disabled={isSubmitting}
    ></textarea>
    {errors.message && <p className="text-red-500 text-sm">Required</p>}
    <button
     className="rounded-2xl border-2 border-white bg-transparent px-6 py-3 uppercase text-white  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer w-full mt-10 "
     disabled={isSubmitting}
    >
     Send
    </button>
    <div className="mt-5 flex flex-col sm:flex-row justify-between gap-y-4">
     <a href="tel:+250785289785" className="flex items-center gap-x-3 ">
      <FaPhoneVolume color="white" className="text-xl" />
      +250785289785
     </a>
     <a
      href="mailto: nkunzurwandasalim6@gmail.com"
      className="flex items-center gap-x-3"
     >
      <MdEmail color="white" className="text-2xl" />
      nkunzurwandasalim6@gmail.com
     </a>
    </div>
   </form>
  </section>
 );
};

export default Contact;
