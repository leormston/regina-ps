import styles from "../input.css"

import img1 from "../media/img1.jpg"
import img2 from "../media/img2.jpg"
import img3 from "../media/img3.png"


const Carousel = () => {
    return <div className="h-96">
        
        <div className="carousel carousel-center rounded-box ">
        <div id="item1" className="carousel-item ">
            <img src={img1} className="h-96 " />
        </div> 
        <div id="item2" className="carousel-item ">
            <img src={img2}  className="h-96" />
        </div> 
        <div id="item3" className="carousel-item ">
            <img src={img3} className=" h-96" />
        </div> 
        <div id="item1" className="carousel-item ">
            <img src={img1} className="h-96 " />
        </div> 
        <div id="item2" className="carousel-item ">
            <img src={img2}  className="h-96" />
        </div> 
        <div id="item3" className="carousel-item ">
            <img src={img3} className=" h-96" />
        </div> 
        </div> 

    </div>
  };
  
  export default Carousel;