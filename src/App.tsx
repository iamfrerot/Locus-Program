import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Locus from "./Components/Locus";
function App() {
 return (
  <div className='bg-black text-white w-full'>
   <NavBar />
   <div className='pt-[95px]'>
    <Hero />
    <About />
    <Locus />
   </div>
  </div>
 );
}

export default App;
