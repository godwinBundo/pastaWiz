import { Element} from "react-scroll"

const HeroPage = () => {
    return (
      <Element name="home">
          <div className=" bg-fixed bg-covers bg-no-repeat bg-cover h-dvh " >
              <div className=" flex flex-col h-full justify-center pl-40 w-[770px] mobile:pl-2 mobile:text-center mobile:w-full">
                  <h1 className="text-white text-7xl font-extrabold mb-6">BEST QUALITY PASTA</h1>
                  <p className="text-white text-lg mb-6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias provident laborum, recusandae delectus corrupti reprehenderit error distinctio eligendi qui consequuntur officia.
                  </p>
                  <button className="bg-[#FFCC33] w-[200px] py-3 rounded-md font-bold text-black">BOOK A TABLE</button>
              </div>
          </div>
      </Element>
    )
  }
  
  export default HeroPage