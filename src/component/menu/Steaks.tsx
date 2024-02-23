import a from "../../assets/product-1.jpeg"
import b from "../../assets/product-2.jpeg"

const Steaks = () => {
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
        }
        
    ]
  return (
    <div className="grid grid-cols-4 gap-x-5 text-center gap-y-10">
    {food.map((item, index)=>(
        <div className=" " key={index}>
            <img className="hover:opacity-60 transition-opacity duration-500 ease-in-out" src={item.image} alt="" />
            <h2 className=" font-extrabold text-lg mt-5">{item.title}</h2>
            <p className="mx-auto font-serif italic my-5 text-lg">{item.text}</p>
            <h2 className=" font-extrabold text-lg text-[#FFCC33]">N{item.price}</h2>
        </div>
    ))}
</div>  )
}

export default Steaks