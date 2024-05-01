const Navbar = () => {
  return (
    <div className=" h-14 flex items-center
     justify-between px-80 shadow-md poppins sticky top-0 w-full bg-slate-50 z-10">
      <div className="text-2xl font-bold">
        <h1>Portofolio</h1>
      </div>
      <div>
        <ul className="flex gap-x-12">
          <li><a href="#">About</a></li>
          <li><a href="#Skills" className="delay-1000">Skills</a></li>
          <li><a href="#Projek">Projek</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar
