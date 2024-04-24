import ig from "../../assets/ig.svg"
import linkedn from "../../assets/linkedn.svg"
import wa from "../../assets/wa.svg"

const Footer = () => {
  return (

    <div className="poppins text-white bg-slate-700 h-52 flex flex-col justify-center items-center gap-y-10">
        <div className="flex gap-x-10  ">
          <a href="https://www.instagram.com/syarifsakur_/"><img src={ig} alt="ig" className="w-10 h-10" /></a>
          <a href="https://www.linkedin.com/in/syarif-mohammad-syakur-6b8716232/"><img src={linkedn} alt="linkedn" className="w-10 h-10" /></a>
          <a href="https://wa.me/6282235059316"><img src={wa} alt="whatsapp"  className="w-10 h-10"/></a>
        </div>
        <div className="">
            <p>copyright-2024</p>
        </div>
    </div>
  )
}

export default Footer
