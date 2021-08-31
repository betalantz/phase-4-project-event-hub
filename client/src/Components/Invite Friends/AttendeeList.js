import Attendee from "./Attendee"

const AttendeeList = ({attendees }) => {

  
    const attendeeList = attendees.map(att => {
        return (
            <Attendee attendee={att}/>
        )
    })


    return (
        
        <div>
            <h2 className='attending-header'>Attending</h2>
            <div className='attendee-list-names'>{attendeeList}</div>
        </div>
    )
}

export default AttendeeList
