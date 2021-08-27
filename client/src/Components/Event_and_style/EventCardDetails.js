import Budget from "../Budget/Budget";
import AddCommentForm from "../Comments/AddCommentForm";
import CommentsList from "../Comments/CommentsList";
import ToDos from "../To-do's/ToDos";
import InviteFriends from "../Invite Friends/InviteFriends";
import { useEffect, useState } from "react";
import "@formatjs/intl-datetimeformat/locale-data/en";
import "./EventCardDetails.css"
import { FaTimes, FaChevronRight } from "react-icons/fa";



const EventCardDetails = ({ event, user, setShowDetails }) => {
  const [commentResults, setCommentResults] = useState([]);
  const [showFriends, setShowFriends] = useState(false)
  const [showBudget, setShowBudget] = useState(false)
  const [showTodos, setShowTodos] = useState(false)
  const [showComments, setShowComments] = useState(false)



  useEffect(() => {
    fetch(`/comments/${event.id}`)
      .then((resp) => resp.json())
      .then((data) => setCommentResults(data));
  }, []);


  let eventDate = new Date(event.date);

  let fmt = new Intl.DateTimeFormat("en", {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="event-card-details">
      <button className='exit-event-card-details-btn'onClick={() => setShowDetails(false)}><FaTimes className='exit-icon'/></button>
      <h1 className="event-card-details-title">{event.title}</h1>
      <div className='event-card-detail-line'></div>
      <h1 className="event-card-details-description">
        {event.description}
      </h1>
      {/* <h1 className="event-card-details-date">Date: {event.date}</h1> */}
      <h1 className="event-card-details-date">
        Date: {`${fmt.format(eventDate)}`}
      </h1>

      <h1 className="event-card-details-time">
        Time: {event.start_time}-{event.end_time}
      </h1>
      <div className='event-navbar-container'>

      <div className='component-container'>
      <h1 className='component-header' onClick={() => setShowFriends(!showFriends)}>Invite Friends<FaChevronRight className='component-dropdown-icon'/></h1>
      {showFriends ? (<div id='event-component'><InviteFriends event={event} user={user}/></div>) : (null)}
      <h1 className='component-header' onClick={() => setShowBudget(!showBudget)}>Budget<FaChevronRight className='component-dropdown-icon'/></h1>
      {showBudget ? (<div id='event-component'><Budget event={event} user={user}/></div>) : (null)}
      <h1 className='component-header' onClick={() => setShowTodos(!showTodos)}>To-dos<FaChevronRight className='component-dropdown-icon'/></h1>
      {showTodos ? (<div id='event-component'><ToDos event={event} user={user} /></div>) : (null)}
      <h1 className='component-header' onClick={() => setShowComments(!showComments)}>Comments<FaChevronRight className='component-dropdown-icon'/></h1>
      {showComments ? (<><div id='event-component'><CommentsList commentResults={commentResults} /></div>      <div id='event-component'><AddCommentForm
        commentResults={commentResults}
        setCommentResults={setCommentResults}
        user={user}
        event={event}
      /></div></>) : (null)}
      </div>

      </div>
    </div>
  );
};

export default EventCardDetails;
