import Header from "../static/Header"
import Footer from "../static/Footer"
import { Outlet } from "react-router-dom"

const WebLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebLayout