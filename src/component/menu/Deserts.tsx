import a from "../../assets/product-1.jpeg"
import b from "../../assets/product-2.jpeg"
import c from "../../assets/product-4.jpeg"
import d from "../../assets/product-5.jpeg"
import e from "../../assets/product-7.jpeg"
import f from "../../assets/product-8.jpeg"
import g from "../../assets/product-3.png"
import h from "../../assets/product-2.jpeg"
const Deserts = () => {
    const food = [
        {
            image: a,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
        {
            image: b,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
        {
            image: c,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
        {
            image: d,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
        {
            image: e,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
        {
            image: f,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
        {
            image: g,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
        {
            image: h,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
    ]
  return (
    <div className="  tablet:flex tablet:flex-col grid grid-cols-4 gap-x-5 text-center gap-y-10">
    {food.map((item, index)=>(
        <div className=" " key={index}>
            <img className="hover:opacity-60 transition-opacity duration-500 ease-in-out tablet:w-[100%]" src={item.image} alt="" />
            <h2 className=" font-extrabold text-lg mt-5">{item.title}</h2>
            <p className="mx-auto font-serif italic my-5 text-lg">{item.text}</p>
            <h2 className=" font-extrabold text-lg text-[#FFCC33]">N{item.price}</h2>
        </div>
    ))}
</div>  )
}

export default Deserts