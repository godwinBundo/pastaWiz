import { Element} from "react-scroll"

const HeroPage = () => {
    return (
      <Element name="home" >
          <div className=" bg-fixed bg-covers bg-no-repeat bg-cover h-dvh tablet:h-[600px] " >
              <div className=" flex flex-col h-full justify-center pl-40 w-[700px] tablet:w-[100%]   tablet:pl-0  tablet:pt-42 tablet:flex tablet:text-center ">
                 
                 <h1 className="text-white text-7xl font-extrabold mb-6 tablet:text-6xl tablet:text-center   ">PASTAWIZ THE PASTA KING</h1>
                 
                  <p className="text-white text-lg mb-6 tablet:text-sm  tablet:w-full  tablet:px-2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias provident laborum, recusandae delectus corrupti reprehenderit error distinctio eligendi qui consequuntur officia.
                  </p>
                <div>
                <button className="bg-[#FFCC33] p-3 rounded-md font-black text-lg text-black">BOOK A SPECIAL DISH</button>
                </div>
              </div>
          </div>
      </Element>
    )
  }
  
  export default HeroPage

  