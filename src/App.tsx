import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Locus from "./Components/Locus";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
function App() {
 return (
  <div className='bg-black text-white w-full'>
   <NavBar />
   <div className='pt-[95px]'>
    <Hero />
    <About />
    <Locus />
    <Testimonials />
    <Contact />
    <Toaster position='top-left' />
    <Analytics />
   </div>
  </div>
 );
}

export default App;
