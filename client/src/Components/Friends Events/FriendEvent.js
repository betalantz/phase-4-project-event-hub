import React from 'react'
import "./FriendEvent.css"

const FriendEvent = ({ friend }) => {



    const displayFriendsEvents = friend.map(event => {
        let eventDate = new Date(event.date);

        let fmt = new Intl.DateTimeFormat("en", {
          year: "numeric",
          weekday: "long",
          day: "numeric",
          month: "short",
        });

        
        return (
            <div>
                <div className='friend-event-card'>
                    <h2 className='friend-event-title'>{event.title}</h2>
                    <div className='friend-event-card-detail-line'></div>
                    <p className='friend-event-date'>{`${fmt.format(eventDate)}`}</p>
                    <h6 className='friend-event-category'>{event.category}</h6>
                    {/* <h5 className='friend-event-date'>{event.date}</h5> */}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>{displayFriendsEvents}</h1>
        </div>
    )
}

export default FriendEvent
