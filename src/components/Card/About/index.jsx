import react from "../../../assets/Syarif.svg"

const Home = () => {
  // const divStyle = {
  //   backgroundImage: `url(https://wallpaperaccess.com/full/1119441.jpg)`,
  //   backgroundSize: 'lvh',
  //   backgroundPosition: 'center',
  // };
  // bg-[url('e:/belajar/portofolio/src/assets/bg.svg')] bg-cover
  return (
    <div id="" className=" w-vh h-lvh flex items-center justify-between px-80 ">
    <div className="poppins text-2xl flex flex-col max-w-96 overflow">
        <h1 className="text-slate-400 animate-bounce static">Hi there,I am</h1>
        <h1 className="font-bold ">Syarif Mohammad Syakur</h1>
        <h1 className=" mt-4">I am a student at Tadulako University, Faculty of Engineering, Informatics Engineering Study Program, class of 2021, in Central Sulawesi, Palu.</h1>
    </div>
    <div>
        <img src={react} alt="gambar" className="w-80 h-96 mb-20"/>
    </div>
</div>
  )
}

export default Home
