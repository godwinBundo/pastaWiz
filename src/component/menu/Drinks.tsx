import e from "../../assets/product-7.jpeg"

const Drinks = () => {
    const food = [
       
        {
            image: e,
            title: "DOUBLE CHEESE PIZZA",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
            price: 1500
        },
        
    ]
  return (
    <div className="  tablet:flex tablet:flex-col grid grid-cols-4 gap-x-5 text-center gap-y-10 transition-all duration-500 ease-in-out">
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

export default Drinks