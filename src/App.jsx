// import Skills from "./components/Card/Skills";
// import About from "./components/Card/About";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer/index";
// import Projek from "./components/Card/Projek";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Portofolio from "./pages/index";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portofolio/>}/>
        <Route path="/tes" element={<Portofolio/>}/>
      </Routes>
    </BrowserRouter>
    
      {/* <Navbar />
      <div className="bg-slate-50">
        <About />
        <Skills />
        <Projek />
      </div>
      <Footer /> */}
    </>
  );
}

export default App;
