import react from "../../../assets/react.svg"
import tailwind from "../../../assets/tailwind.svg"
import nodejs from "../../../assets/node-js.svg"
import postman from "../../../assets/postman.svg"
import mysql from "../../../assets/mysql.svg"
import laravel from "../../../assets/laravel.svg"
import cloudfunctions from "../../../assets/cloudfuntions.svg"

const About = () => {
  return (
    <div className=" w-vh h-lvh border-2 mx-80 flex flex-col items-center" id="Skills">
      <div className="mb-36 mt-14">
        <h1 className="text-3xl font-bold mt-4">-------------------- Skills & Tech --------------------</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
        <img src={react} alt="" className="w-40 h-40 animate-spin "/>
        <img src={tailwind} alt="" className="w-40 h-40"/>
        <img src={nodejs} alt="" className="w-40 h-40"/>
        <img src={postman} alt="" className="w-40 h-40"/>
        <img src={mysql} alt="" className="w-40 h-40"/>
        <img src={laravel} alt="" className="w-40 h-40"/>
        <img src={cloudfunctions} alt="" className="w-40 h-40"/>
      </div>
    </div>
  )
}

export default About

