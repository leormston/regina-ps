


import styles from "../input.css"
import { useNavigate } from "react-router-dom";

const Blogcard = (props) => {
  const navigate = useNavigate();



    return (
<div className="card card-compact bg-base-100 shadow-xl md:h-96 sm:h-auto xs:h-auto">
  <figure><img loading="lazy" src={props.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <a className="btn btn-primary rounded-full" onClick={() => navigate(props.location + props.id)}>Read </a>
    </div>
  </div>
</div>
    )
  };
  
  export default Blogcard;