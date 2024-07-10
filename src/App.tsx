import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
function App() {
 return (
  <div className='bg-black text-white w-full'>
   <NavBar />
   <div className='pt-[95px]'>
    <Hero />
    <About />
   </div>
  </div>
 );
}

export default App;
