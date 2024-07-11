import { Card, CardStack } from "./ui/CardsTestimonials";

const testimonials: Card[] = [
 {
  id: 1,
  name: "Chris",
  designation: "Part Time Engineer",
  content:
   "This Program changed my life. I went from struggling to provide for my family to running a thriving business.",
 },
 {
  id: 3,
  name: "Eric ",
  designation: "Senior Marketing",
  content:
   "The support and guidance i received were invaluable. I now have the confidence and skills to grow my busines.",
 },
 {
  id: 2,
  name: "Alex R",
  designation: "E-commerce Entrepreneur",
  content:
   "I used to delay everything, and my business suffered. With the right strategies, I overcame procrastination and my online store in now thriving!",
 },
 {
  id: 4,
  designation: "Local Business Owner",
  name: "Emily S.",
  content:
   "Procrastination was my biggest enemy. Now, I have clear goals and plan to achieve them. My business is growing both online and offline.",
 },
];
const Testimonials = () => {
 return (
  <section className=' py-10 lg:px-10 relative flex flex-col items-center '>
   <h1 className='text-2xl mb-12'>Testimonials</h1>
   <div className='flex justify-center px-6 lg:px-0 items-center gap-4 flex-col-reverse sm:flex-row'>
    <p className='font-[200] lg:text-xl sm:max-w-[50%]'>
     <span className='bg-[#180109] text-[#b00f17] font-semibold'>
      Call to Action:
     </span>{" "}
     Join Our Program Today and take the first step toward a prosperous future.
     Unleash your entrepreneurial spirit with our comprehensive training,
     mentorship from successful business leaders, and access to invaluable
     resources. Don't wait—transform your ideas into thriving businesses and
     achieve your entrepreneurial dreams with us.
    </p>
    <CardStack items={testimonials} />
   </div>
  </section>
 );
};

export default Testimonials;
