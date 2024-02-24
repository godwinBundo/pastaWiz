import leaf from "../assets/bg-title.png"
import a from "../assets/product-3.png"
import { Element} from "react-scroll"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


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
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive:[
            {
                breakpoint: 320,
                settings: {
                    slidesToshow: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToshow: 1
                }
            },

        ]
      
      };
    
  return (
    <Element name="menu" className=" bg-black text-white py-24 px-40 tablet:px-0  ">
        <div className=" flex items-center justify-center gap-x-2 tablet:gap-x-0 tablet:w-[300px]" >
            <img src={leaf} />
            <h1 className="text-5xl font-extrabold tablet:text-[18px]  ">OUR SPECIAL DISHES</h1>
        </div>
        <p className=" text-center w-2/5 mx-auto text-lg mt-5 tablet:w-[300px] tablet:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio fugit in sint natus deserunt hic eaque dolores.</p>

        <div className="mt-10 tablet:w-[700px] md:w-[100%] ">
            <Slider className=" " {...settings}>
            {special.map((item, index)=>(
                <div className=" tablet:w-[100%] text-center " key={index}>
                    <img src={item.image} className=" p-2 tablet:p-1  " />
                    <h2 className=" font-extrabold text-lg mt-5 gap-10  tablet:gap-5 tablet:text-[8px]">{item.title}</h2>
                    <p className="  mx-auto my-5 text-lg tablet:text-[6px] ">{item.description}</p>
                    <h2 className=" font-extrabold text-lg text-[#FFCC33] tablet:text-[13px]">N {item.price.toFixed(2)}</h2>
                </div>
            ))}
            </Slider>
            </div>

    </Element>
  )
}

export default SpecialDish