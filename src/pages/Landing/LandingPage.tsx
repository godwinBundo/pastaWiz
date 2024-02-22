import About from "../../component/About"
import BestChef from "../../component/BestChef"
import BookTable from "../../component/BookTable"
import Contacts from "../../component/Contacts"
import Double from "../../component/Double"
import Gallery from "../../component/Gallery"
import HeroPage from "../../component/HeroPage"
import Menu from "../../component/Menu"
import SpecialDish from "../../component/SpecialDish"


const LandingPage = () => {
  return (
    <div>
      <HeroPage/>
      <SpecialDish/>
      <About/>
      <Double/>
      <BestChef/>
      <Menu/>
      <Gallery/>
      <BookTable/>
      <Contacts/>
    </div>
  )
}

export default LandingPage