import Event from "./Event"
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./Event.css"
import { useEffect } from 'react'

const EventList = ({events, user}) => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <>
        <div data-aos='fade-right' data-aos-duration='900' data-aos-easing="ease-in-out">
        <h1 className='event-list-header'>Event List</h1>
        <div className='event-list-line'></div>
        </div>
        <div className='event-card-container'>
            {events.length > 0 ? 
            (events.map(event => {
                return (
                    <Event 
                        key={event.id}
                        user={user}
                        event={event}
                    />
                )

            })) : (null)}
        </div>
        </>
    )
}

export default EventList
