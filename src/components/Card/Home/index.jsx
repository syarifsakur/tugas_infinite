import react from "../../../assets/Syarif.svg"


const Home = () => {
  // const divStyle = {
  //   backgroundImage: `url(https://wallpaperaccess.com/full/1119441.jpg)`,
  //   backgroundSize: 'lvh',
  //   backgroundPosition: 'center',
  // };
  return (
    <div className=" w-full h-lvh flex items-center justify-center gap-x-24">
    <div className="poppins text-2xl flex flex-col max-w-96 overflow">
        <h1 className="text-slate-400">___Halo Semua Saya</h1>
        <h1 className="font-bold ">Syarif Mohammad Syakur</h1>
        <h1 className=" mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam deserunt perspiciatis accusantium omnis! Praesentium illum odio maiores, quidem quasi similique dolorum sed voluptatem doloremque modi accusamus eos cupiditate dolores.</h1>
    </div>
    <div>
        <img src={react} alt="gambar" className="w-80 h-80 "/>
    </div>
</div>
  )
}

export default Home
