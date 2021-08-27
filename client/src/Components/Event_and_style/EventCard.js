
import { FaChevronRight } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'




const EventCard = ({event, setShowDetails, showDetails}) => {
    
    useEffect(() => {
        Aos.init()
    }, [])

    let eventDate = new Date(event.date);

    let fmt = new Intl.DateTimeFormat("en", {
      year: "numeric",
      weekday: "long",
      day: "numeric",
      month: "short",
    });

    return (
        <div data-aos='fade-left' data-aos-duration='900' data-aos-easing="ease-in-out">
        <div className='event-card'>
            <h2 className='event-card-title'>{event.title}</h2>
            <div className='event-card-line'></div>
            <p className='event-card-date'>{`${fmt.format(eventDate)}`}</p>
            <div className="view-container">
              <p className='event-card-view-details' onClick={() => setShowDetails(!showDetails)}>
                View Details
                <FaChevronRight className="view-event-icon" />
              </p>
            </div>
        </div>
        </div>
    )
}

export default EventCard
