import Header from "../static/Header"
import Footer from "../static/Footer"
import { Outlet } from "react-router-dom"

const WebLayout = () => {
  return (
    <div className=" radio:z-10 radio:overflow-hidden tablet:overflow-hidden tablet:z-10">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebLayout