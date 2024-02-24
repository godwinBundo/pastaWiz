import leaf from "../assets/bg-title.png"
import gallery from "../assets/gallery-4.jpeg"
import gallery1 from "../assets/gallery-3.jpeg"
import gallery2 from "../assets/gallery-5.jpeg"
import gallery3 from "../assets/gallery-2.jpeg"
import gallery4 from "../assets/gallery-6.jpeg"
import gallery5 from "../assets/gallery-1.jpeg"
import {Element} from "react-scroll"

const Gallery = () => {
  const galleryImage = [gallery, gallery1, gallery2, gallery3, gallery4, gallery5]
  return (
    <Element name="gallery" className=" bg-black text-white py-24">
        <div className="flex items-center justify-center gap-x-2" >
            <img src={leaf} />
            <h1 className="text-5xl font-extrabold tablet:text-3xl">GALLERY</h1>
        </div>
        <div className="mt-10 grid grid-cols-3 px-40 tablet:px-2 tablet:flex-col tablet:flex">
          {galleryImage.map((item, index)=>(
            <div  key={index}>
              <img className="hover:opacity-60 transition-opacity duration-300 ease-in" src={item} />
            </div>
          ))}
            
        </div>
    </Element>
  )
}

export default Gallery