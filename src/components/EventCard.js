


import styles from "../input.css"

const EventCard = (props) => {
    return (
<div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={props.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <p>{props.date}</p>
    <div className="card-actions justify-end">
      <a className="btn btn-primary rounded-full" target="_blank" href={props.link}>Learn More</a>
    </div>
  </div>
</div>
    )
  };
  
  export default EventCard;