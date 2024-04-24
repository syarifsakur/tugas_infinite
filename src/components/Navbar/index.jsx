const Navbar = () => {
  return (
    <div className=" h-14 flex items-center
     justify-around shadow-md poppins sticky top-0 w-full bg-white">
      <div className="text-2xl font-bold">
        <h1>Portofolio</h1>
      </div>
      <div>
        <ul className="flex gap-x-12">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar
