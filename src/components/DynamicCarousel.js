import styles from "../input.css"




const DynamicCarousel = (props) => {
    return <div className="h-96">

        <div className="carousel carousel-center rounded-box ">
        {props.images.map((image) => (
        <div id="item1" className="carousel-item ">
            <img loading="lazy" src={image} className="h-96 " />
        </div> 
        ))}
        </div> 

    </div>
  };
  
  export default DynamicCarousel;