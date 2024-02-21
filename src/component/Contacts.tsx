import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md"
import { Element} from "react-scroll"
import leaf from "../assets/bg-title.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"

const Contacts = () => {
  return (
    <Element name="contacts" className=" bg-black text-white py-24">
        <div className="flex items-center justify-center gap-x-2" >
            <img src={leaf} />
            <h1 className="text-5xl font-extrabold">CONTACTS</h1>
        </div>
        <div className="px-40 flex justify-between mt-12">
            <div className="">
                <div className="flex text-2xl items-center gap-3">
                    <MdLocationOn className="text-[#FFCC33]"/>
                    <h1 className=" font-extrabold">LOCATION</h1>
                </div>
                <p className="mt-2">2900 Lapeer Rd, Port Hurons</p>
            </div>
            <div className="">
                <div className="flex text-2xl items-center gap-3">
                    <MdPhone className="text-[#FFCC33]"/>
                    <h1 className=" font-extrabold">PHONE</h1>
                </div>
                <p className="text-[#FFCC33] mt-2 text-xl font-extrabold hover:text-white transition-colors duration-300 ease-in cursor-pointer">800 478 43 51</p>
            </div>
            <div className="">
                <div className="flex text-2xl items-center gap-3">
                    <MdEmail className="text-[#FFCC33]"/>
                    <h1 className=" font-extrabold">EMAIL</h1>
                </div>
                <p className="mt-2">info@restfood.com</p>
            </div>
            <div className="flex items-center justify-between w-1/4 text-[#FFCC33] text-2xl">
                <FaFacebookF className="hover:text-white transition-colors duration-300 ease-in"/>
                <FaTwitter className="hover:text-white transition-colors duration-300 ease-in"/>
                <FaInstagram className="hover:text-white transition-colors duration-300 ease-in"/>
                <FaYoutube className="hover:text-white transition-colors duration-300 ease-in"/>
            </div>
        </div>
    </Element>
  )
}

export default Contacts