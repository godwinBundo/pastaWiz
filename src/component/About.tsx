import { Element} from "react-scroll"
import leaf from "../assets/bg-title.png"
import about from "../assets/about-big.jpeg"
import experience from "../assets/advantage-1.png"
import fresh from "../assets/advantage-3.png"
import original from "../assets/advantage-2.png"

const About = () => {
  return (
    <Element name="about" className="bg-black text-white py-24" >
        <div className=" flex items-start gap-10  px-40">
            <div className="w-3/4">
                <img src={about} alt="" />
            </div>
           <div className="w-full">
           <div className="flex items-center justify-center gap-x-2"  >
            <img src={leaf} />
            <h1 className="text-5xl font-extrabold">GOOD FOOD FOR YOUR ALL DAY GOOD MOOD</h1>
            
            </div>
            <p className="mt-12">Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate dignissimos officiis quis pariatur earum voluptas quia sed.</p>
            <p className="mt-8">Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate dignissimos officiis quis pariatur earum voluptas quia sed.</p>
            <p className="mt-8">Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate dignissimos officiis quis pariatur earum voluptas quia sed.</p>
            <div className=" flex justify-between mt-16 px-4 font-extrabold">
                <div className="">
                    <img src={experience} className="mx-auto mb-5" />
                    <h3>EXPERIENCED CHEFS</h3>
                </div>
                <div className="">
                    <img src={original} className="mx-auto mb-5" />
                    <h3>ORIGINAL RECIPES</h3>
                </div>
                <div className=" ">
                    <img src={fresh} className="mx-auto mb-5" />
                    <h3>FRESH INGREDIENTS</h3>
                </div>
           </div>
           </div>
           
        </div>

    </Element>
  )
}

export default About