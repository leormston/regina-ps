

import styles from "../input.css"
import EventCard from "../components/EventCard";
import ahm from "../media/ahm.jpeg";

const Events = () => {
    return (
    <div>
        <p className="btn btn-primary rounded-full text-center text-gray-100">Upcoming Events</p>
        <br/>
        <br/>
        <div className="grid lg:grid-cols-5 gap-4 md:grid-cols-3 sm:grid-cols-2">
                <div className="col-span-1">
                    <EventCard title={"After Hours Performance Club"} 
                    description={"After Hours Mixer, a vibrant and inclusive queer performance night that celebrates diversity and empowers emerging LGBTQIA+ artists."} 
                    image={ahm}
                    link={"https://www.eventbrite.co.uk/e/after-hours-performance-club-tickets-627091787417?aff=odcleoeventsincollection"}
                    date={"Wed, 7 Jun 2023"}/>

                </div>
            </div>
        
    </div>
    )
  };
  
  export default Events;