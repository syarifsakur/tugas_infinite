import projek1 from "../../../assets/projek1.svg"
import nodejs from "../../../assets/node-js.svg"
import postman from "../../../assets/postman.svg"
import mysql from "../../../assets/mysql.svg"
import projek2 from "../../../assets/html.svg"
import html from "../../../assets/html-1.svg"
import css from "../../../assets/css-3.svg"

const Projek= () => {
  return (
    <div className="">
      <div id="Projek" className="border-2 w-vh h-vh mx-80 py-14 flex justify-center flex-wrap poppins gap-y-20 bg-white">
              <div className="">
          <h1 className="text-3xl font-bold mt-4">------------------------ Projek ------------------------</h1>
        </div>
          <div className="border-2 my-4 py-4 h-3/5 shadow-lg flex flex-col gap-y-2 items-center ">
            <img src={projek1} alt="" className="w-64 h-72 border-2 shadow-lg"/>
            <p className="">Link   :  <a href="https://recyeco-fe.vercel.app/" className="text-blue-700">https://recyeco-fe.vercel.app/</a></p>
            <p className="ml-10 max-w-72">Github :   <a href="https://github.com/proxo-pt/recyeco-be-deploy.git" className="text-blue-700">https://github.com/proxo-pt/recyeco-be-deploy.git</a></p>
          </div>
          <div className="max-w-96 my-4 h-3/5 ml-10  font-semibold flex flex-col gap-y-6">
            <h1>RecyEco Mart adalah  platform terdepan dalam mendukung gerakan daur ulang dan pengelolaan sampah dengan menyediakan layanan e-commerce yang inovatif dan ramah lingkungan. Kami bermimpi untuk menciptakan sebuah ekosistem di mana setiap individu dapat dengan mudah berpartisipasi dalam upaya menjaga keberlanjutan lingkungan melalui pembelian dan penjualan barang daur ulang.</h1>
            <h1 >Role : Back-End Developer</h1>
            <h1>Tech :</h1>
            <div className="flex gap-x-3 ">
              <img src={nodejs} alt="" className="w-10 h-10"/>
              <img src={postman} alt="" className="w-10 h-10"/>
              <img src={mysql} alt="" className="w-10 h-10"/>  
            </div>
          </div>

          <div className="border-2 my-4 py-4 h-3/5 shadow-lg flex flex-col gap-y-2 items-center ">
            <img src={projek2} alt="" className="w-64 h-72 border-2 shadow-lg"/>
            <p className="ml-10 max-w-72 overflow-hidden">Link   :  <a href="https://syarifsakur.github.io/F55121020_Syarif-Mohammad-Syakur/home.html" className="text-blue-700">https://syarifsakur.github.io/F55121020_Syarif-Mohammad-Syakur/home.html</a></p>
            <p className="ml-10 max-w-72">Github :   <a href="https://github.com/proxo-pt/recyeco-be-deploy.git" className="text-blue-700">https://github.com/proxo-pt/recyeco-be-deploy.git</a></p>
          </div>
          <div className="max-w-96 my-4 h-3/5 ml-10  font-semibold flex flex-col gap-y-6">
            <h1>Website yang berguna
                untuk mempermudah masyarakat yang punya hobi di bidang olahraga
                futsal untuk mencari lapangan futsal sekaligus booking lapangan nya.
                terdapat banyak pilihan lapangan futsal yang ingin di pilih dan juga dengan
                harga lapangan yang berbagai macam.
                ada dari yang paling murah sampai yang paling mahal.</h1>
            <h1 >Role : Front-End Developer</h1>
            <h1>Tech :</h1>
            <div className="flex gap-x-3 ">
              <img src={html} alt="" className="w-10 h-10"/>
              <img src={css} alt="" className="w-10 h-10"/>
            </div>
          </div>     
      </div>
    </div>
  )
}

export default Projek
