import { formFields } from "../Components/Contact";

const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

const resend = async ({ email, subject, message }: formFields) => {
 try {
  const response = await fetch("https://api.resend.com", {
   method: "POST",
   headers: {
    Authorization: `Bearer ${RESEND_API_KEY}`,
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    to: contactEmail,
    subject: `${subject}`,
    text: `${message}`,
    from: "locusprogram@resend.dev",
    reply_to: `${email}`,
   }),
  });
  if (!response.ok) {
   throw new Error("Error Sending Email");
  }
  return "Email Sent";
 } catch (error: any) {
  return error.message;
 }
};

export default resend;
