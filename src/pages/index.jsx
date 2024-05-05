import About from "../components/Card/About"
import Navbar from "../components/Navbar"
import Skills from "../components/Card/Skills";
import Footer from "../components/Footer/index";
import Projek from "../components/Card/Projek";

const Portofolio = () => {
  return (
    <>
        <Navbar/>
      <div className="bg-slate-50">
        <About/>
        <Skills/>
        <Projek/>
      </div>
      <Footer/> 
      </>
  )
}

export default Portofolio
