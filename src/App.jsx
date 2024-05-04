import Skills from "./components/Card/Skills";
import About from "./components/Card/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/index";
import Projek from "./components/Card/Projek";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-50">
        <About />
        <Skills />
        <Projek />
      </div>
      <Footer />
    </>
  );
}

export default App;
