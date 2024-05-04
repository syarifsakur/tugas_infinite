const Navbar = () => {
  return (
    <div className="flex bg-slate-50 z-10 shadow-md sticky top-0">
      <div className="w-full mx-10 lg:mx-80 h-14 flex items-center justify-between">
        <div className="text-xl lg:text-3xl font-bold">
          <h1>Portofolio</h1>
        </div>
        <ul className="flex gap-x-12 hidden sm:flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#Skills" className="delay-1000">
              Skills
            </a>
          </li>
          <li>
            <a href="#Projek">Projek</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
