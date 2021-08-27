import React from 'react'
import FriendEvent from './FriendEvent'

const FriendEventList = ({friendsEvents}) => {

    const allFriends = friendsEvents.map(event => {
        return (

            <FriendEvent key={event.id} names={friendsEvents} friend={event.events}/>
        )
    })

    return (
        <div className='friend-event-container'>
            {allFriends}
        </div>
    )
}

export default FriendEventList
