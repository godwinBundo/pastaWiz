import leaf from "../assets/bg-title.png"
import a from "../assets/product-3.png"
import b from "../assets/product-4.jpeg"
import c from "../assets/product-1.jpeg"
import d from "../assets/product-5.jpeg"
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
            image: b,
            title: "PASTA",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: 4000.00
        },
        {
            image: c,
            title: "DOUBLE CHEESE PIZZA",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: 3000.00

        },
        {
            image: d,
            title: "CHICKEN BURGER MEAL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: 2000.00
        },
        

    ]
   
    
  return (
    <Element name="menu" className=" bg-black text-white py-24 px-40 tablet:px-2 mobile:px-1 flex flex-col items-center">
        <div className=" flex items-center justify-center gap-x-2 tablet:gap-x-0 " >
            <img src={leaf} />
            <h1 className="text-5xl font-extrabold tablet:text-4xl tablet:text-center mobile:text-3xl mobile:text-center  ">OUR SPECIAL DISHES</h1>
        </div>
        <p className=" text-center w-2/5 mx-auto text-lg my-5 tablet:w-full tablet:text-base ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio fugit in sint natus deserunt hic eaque dolores.</p>
        <div className="flex item-center tablet:flex-wrap w-full gap-4 tablet:w-[95%] tablet:gap-10 justify-center mobile:flex-col">
            {special?.map((item, i) => (
            <div key={i} className="w-[35rem] flex item-center flex-col gap-5 tablet:w-[20rem] mobile:w-full">
                <img src={item?.image} alt="pastawiz" className="w-full object-cover"/>
                <div className="flex flex-col gap-2 w-full">
                <span className="text-lg font-semibold">{item?.title}</span>
                <span>{item?.description}</span>
                <span className="font-bold text-2xl text-amber-500">{item?.price}</span>
                </div>
            </div>
            ))}
        </div>
    </Element>
  )
}

export default SpecialDish