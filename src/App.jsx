import About from "./components/Card/About"
import Home from "./components/Card/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer/index"

function App() {
  return (
    <>
    <Navbar/>
    <div className="gap-x-30">
      <Home/>
      <About/>
      </div>
      <Footer/>
    </>
  )
}

export default App
