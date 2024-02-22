import { Element } from "react-scroll"
import leaf from "../assets/bg-title.png"
const Menu = () => {
  return (
    <Element name="menu" className=" bg-zinc-900 text-white py-24">
        
            <div className="flex items-center justify-center gap-x-2" >
                <img src={leaf} />
                <h1 className="text-5xl font-extrabold">OUR MENU</h1>
            </div>
            <div className="px-40"></div>
        
    </Element>
  )
}

export default Menu