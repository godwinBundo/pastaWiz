import leaf from "../assets/bg-title.png"

const BookTable = () => {
  return (
    <div className="bg-zinc-900 text-white py-24 px-40">
        <div className="flex items-center justify-center gap-x-2" >
            <img src={leaf} />
            <h1 className="text-5xl font-extrabold">BOOK A TABLE</h1>
        </div>
        <div className="flex items-center gap-10 mt-20 ">
           <form className="grid grid-cols-2 gap-5 w-full">
           <div className="flex flex-col">
                <label className="text-[#ffcc33] font-black text-xs">NAME</label>
                <input type="text" placeholder="Name" className="bg-black outline-[#ffcc33] focus-within:outline p-4 rounded-sm mt-1" />
            </div>
            <div className="flex flex-col">
                <label className="text-[#ffcc33] font-black text-xs">LAST NAME</label>
                <input type="text" placeholder="Last Name" className="bg-black outline-[#ffcc33] focus-within:outline p-4 rounded-sm mt-1" />
            </div>
           <div className="flex flex-col">
                <label className="text-[#ffcc33] font-black text-xs">PHONE</label>
                <input type="text" placeholder="Phone" className="bg-black outline-[#ffcc33] focus-within:outline p-4 rounded-sm mt-1" />
            </div>
            <div className="flex flex-col">
                <label className="text-[#ffcc33] font-black text-xs">EMAIL</label>
                <input type="text" placeholder="Email" className="bg-black outline-[#ffcc33] focus-within:outline p-4 rounded-sm mt-1" />
            </div>
           <div className="flex flex-col">
                <label className="text-[#ffcc33] font-black text-xs">DATE</label>
                <input type="text" placeholder="mm-dd-yy" className="bg-black border-none outline-[#ffcc33] focus-within:outline  p-4 rounded-sm mt-1" />
            </div>
            <div className="flex flex-col">
                <label className="text-[#ffcc33] font-black text-xs">TIME</label>
                <input type="text" placeholder="12:00 AM" className="bg-black p-4 rounded-sm mt-1 outline-[#ffcc33] focus-within:outline" />
            </div>
            <button className="bg-[#FFCC33] w-[170px] py-2 rounded-md font-black  text-black">BOOK A TABLE</button>
           </form>
            <div className="w-3/4  bg-black text-white px-6 py-16">
                <h1 className="font-extrabold text-[40px] mb-3">OPENING HOURS</h1>
                <p className="text-lg mb-10 text-[#9D9D9D]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, inventore hic nulla, provident laudantium voluptate ipsa eligendi commodi mollitia vero animi, repudiandae quidem minima est sint sapiente quas iure deleniti.</p>
                <div className="flex items-center justify-between border-b border-b-[#9D9D9D] pb-1 mb-10">
                    <p>Monday - Friday</p>
                    <p>8AM - 6PM</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-[#9D9D9D] pb-1 mb-10">
                    <p>Saturday</p>
                    <p>9AM - 5PM</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-[#9D9D9D] pb-1">
                    <p>Sunday</p>
                    <p>9AM - 4PM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookTable