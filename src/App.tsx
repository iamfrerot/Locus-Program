import './App.css'
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

function App() {
 return (
  <div className='bg-black text-white w-fit'>
   <NavBar />
   <div className='pt-[95px]'>
    <Hero />
   </div>
  </div>
 );
}

export default App
