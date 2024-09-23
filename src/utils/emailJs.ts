import { formFields } from '../Components/Contact';
import emailjs from '@emailjs/browser';

const service_id = import.meta.env.VITE_SERVICE_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;
const user_id = import.meta.env.VITE_USER_ID;
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

const emailJs = async ({ email, subject, message, name }: formFields) => {
 emailjs.init({
  publicKey: user_id,
 });
 try {
  await emailjs.send(service_id, template_id, {
   email,
   subject,
   message,
   name,
   contactEmail,
  });
  return { message: 'Email Sent' };
 } catch (error: any) {
  return { message: 'Error Sending Email' };
 }
};

export default emailJs;
