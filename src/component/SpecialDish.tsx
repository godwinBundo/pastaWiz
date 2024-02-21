import leaf from "../assets/bg-title.png"
import a from "../assets/product-3.png"
import { Element} from "react-scroll"

const SpecialDish = () => {
    const special = [
        {
            image: a,
            title: "BEEF BURGER MEAL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: 5000.00
        },
        {
            image: a,
            title: "PASTA",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: 4000.00
        },
        {
            image: a,
            title: "DOUBLE CHEESE PIZZA",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: 3000.00
        },
        {
            image: a,
            title: "CEASER SALAD",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: 2000.00
        },

    ]
  return (
    <Element name="menu" className=" bg-black text-white py-24">
        <div className="flex items-center justify-center gap-x-2" >
            <img src={leaf} />
            <h1 className="text-5xl font-extrabold">OUR SPECIAL DISHES</h1>
        </div>
        <p className=" text-center w-2/5 mx-auto text-lg mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio fugit in sint natus deserunt hic eaque dolores.</p>
        <div className="mt-10 flex gap-3 px-40">
            {special.map((item, index)=>(
                <div className=" text-center" key={index}>
                    <img src={item.image} />
                    <h2 className=" font-extrabold text-lg mt-5">{item.title}</h2>
                    <p className="  mx-auto my-5 text-lg">{item.description}</p>
                    <h2 className=" font-extrabold text-lg text-[#FFCC33]">N {item.price.toFixed(2)}</h2>
                </div>
            ))}
        </div>
    </Element>
  )
}

export default SpecialDish