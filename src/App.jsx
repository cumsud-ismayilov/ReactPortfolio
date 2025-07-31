import { BrowserRouter, Route, Routes } from "react-router";
import HeroBackground from "./components/Herobackground";
import Navbar from "./layout/navbar/navbar";
import Footer from "./layout/footer/footer";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Home from "./pages/home/home";

function App() {
   return (
    <>
    <BrowserRouter>
     <HeroBackground/>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
     
    </>
  );
}

export default App;
