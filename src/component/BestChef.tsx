import leaf from "../assets/bg-title.png"
import a from "../assets/chef-1.jpeg"
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
import { Element} from "react-scroll"


const BestChef = () => {
    const chefs = [
        {
            image: a,
            name: "RICHARD NAUZ",
            position: "food chef",
            handle: [
                <FaFacebookF className="hover:text-white transition-colors duration-300 ease-in"/>,
                <FaTwitter className="hover:text-white transition-colors duration-300 ease-in"/>,
                <FaInstagram className="hover:text-white transition-colors duration-300 ease-in"/>,
            ]
        },
        {
            image: a,
            name: "OLIVIA GROSH",
            position: "food chef",
            handle: [
                <FaFacebookF className="hover:text-white transition-colors duration-300 ease-in"/>,
                <FaTwitter className="hover:text-white transition-colors duration-300 ease-in"/>,
                <FaInstagram className="hover:text-white transition-colors duration-300 ease-in"/>,
            ] 
        },
        {
            image: a,
            name: " JEREMY WHITE",
            position: "food chef",
            handle: [
                <FaFacebookF className="hover:text-white transition-colors duration-300 ease-in "/>,
                <FaTwitter className="hover:text-white transition-colors duration-300 ease-in "/>,
                <FaInstagram className="hover:text-white transition-colors duration-300 ease-in "/>,
            ] 
        },
        {
            image: a,
            name: " HOWARD HOLMES",
            position: "food chef",
            handle: [
                <FaFacebookF className="hover:text-white transition-colors duration-300 ease-in"/>,
                <FaTwitter className="hover:text-white transition-colors duration-300 ease-in"/>,
                <FaInstagram className="hover:text-white transition-colors duration-300 ease-in"/>,
                
            ] 
        },

    ]
  return (
    <Element name="chefs" className='bg-black text-white py-24  '>
        <div className="flex items-center justify-center gap-x-2" >
            <img src={leaf} />
            <h1 className="text-5xl font-extrabold tablet:text-2xl ">OUR BEST CHEF</h1>
        </div>
        <p className=" text-center w-2/5 mx-auto text-lg mt-5 tablet:text-sm tablet:w-[300px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio fugit in sint natus deserunt hic eaque dolores.</p>
        <div className=" px-40 flex gap-5 mt-10 tablet:flex-col tablet:px-2 ">
            {chefs.map((item, index)=>(
                <div className=" text-center " key={index}>
                    <img className="w-[100%]" src={item.image} />
                    <h2 className=" font-extrabold text-lg mt-5">{item.name}</h2>
                    <p className="  mx-auto mt-1 text-lg">{item.position}</p>
                    <div className="flex justify-center mt-5 gap-x-5 text-[#FFCC33]">{item.handle}</div>
                </div>
            ))}
        </div>
    </Element>
  )
}

export default BestChef