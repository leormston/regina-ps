import styles from "../input.css"








import img1 from "../media/img1.jpg"
import img2 from "../media/img2.jpg"
import img3 from "../media/img3.png"
import img4 from "../media/img4.png"
import img5 from "../media/img5.JPG"


const Gallery = () => {
    return (
        <div className="grid lg:grid-cols-5 gap-4 md:grid-cols-4 sm:grid-cols-3 flex">
            <div className="grid gap-4">
                <img className="rounded-lg h-auto max-w-full"  src={img1}></img>
                <img className="rounded-lg h-auto max-w-full" src={img3}></img>
                <img className="rounded-lg h-auto max-w-full" src={img2}></img>
            </div>
            <div className="grid gap-4">
                <img className="rounded-lg h-auto max-w-full" src={img4}></img>
                <img className="rounded-lg h-auto max-w-full" src={img1}></img>
                <img className="rounded-lg h-auto max-w-full" src={img2}></img>
            </div>
            <div className="grid gap-4">
                <img className="rounded-lg h-auto max-w-full" src={img1}></img>
                <img className="rounded-lg h-auto max-w-full" src={img2}></img>
                <img className="rounded-lg h-auto max-w-full" src={img1}></img>

            </div>
            <div className="grid gap-4">
                <img className="rounded-lg h-auto max-w-full" src={img1}></img>
                <img className="rounded-lg h-auto max-w-full" src={img3}></img>
                <img className="rounded-lg h-auto max-w-full" src={img5}></img>

            </div>
            <div className="grid gap-4">

                <img className="rounded-lg h-auto max-w-full" src={img5}></img>
                <img className="rounded-lg h-auto max-w-full" src={img2}></img>
                <img className="rounded-lg h-auto max-w-full" src={img4}></img>
            </div>
        </div>
    )
  };
  
  export default Gallery;