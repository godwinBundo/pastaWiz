import BestChef from "../../component/BestChef"
import Contacts from "../../component/Contacts"
import Gallery from "../../component/Gallery"
import HeroPage from "../../component/HeroPage"
import SpecialDish from "../../component/SpecialDish"


const LandingPage = () => {
  return (
    <div>
      <HeroPage/>
      <SpecialDish/>
      <BestChef/>
      <Gallery/>
      <Contacts/>
    </div>
  )
}

export default LandingPage