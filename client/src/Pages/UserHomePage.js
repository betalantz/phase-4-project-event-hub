import Avatar from 'react-avatar'
import { FaCameraRetro } from "react-icons/fa";
import EditPhotoForm from '../Components/EditPhotoForm';
import { useState, useEffect } from 'react'
import Linebreakhomepage from '../Components/Linebreakhomepage'
import FriendEventList from '../Components/Friends Events/FriendEventList';
import { NavLink } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'


const UserHomePage = ({ user }) => {
    const [friendsEvents, setFriendsEvents] = useState([])
    const [showFriendsEvents, setShowFriendsEvents] = useState(false)

    useEffect(() => {
        fetch('/friendships')
        .then(resp => resp.json())
        .then(data => setFriendsEvents(data))
    },[])

    
    useEffect(() => {
        Aos.init()
    }, [])

    const [showEditPhotoForm, SetShowEditPhotoForm] = useState(false)

    function handleEditPhotoForm(){
        SetShowEditPhotoForm(!showEditPhotoForm)
    }

    function handleShowFriendsEvents(){
        setShowFriendsEvents(!showFriendsEvents)
    }


    return (
        <div>
        <div data-aos='fadeg-up' data-aos-duration='1000' data-aos-easing="ease-in-out">
            <div className='homepage-banner'>
                {showEditPhotoForm ? (<><EditPhotoForm /><FaCameraRetro onClick={handleEditPhotoForm} /> </>) : (<FaCameraRetro onClick={handleEditPhotoForm} /> )}
                { user.user_photo.includes("https://") ? (<Avatar 
                    round={true}
                    size={130}
                    className='avatar-photo'
                    src={user.user_photo}
                    />) : (<Avatar 
                        round={true}
                        size={130}
                        className='avatar-photo'
                        name={user.name}
                        color="#3C1874"
                        />)}

                <h3 className='welcomeback-header'>Welcome, {user.name}</h3>
            </div>
            <Linebreakhomepage />
            <div className='home-page-nav'>
            <h1><NavLink className='home-page-nav-events' to="/eventspage">
            Events
            </NavLink></h1>
            <h1 className='home-page-nav-friends-events' onClick={() => handleShowFriendsEvents()}>Friends Event's</h1>
            <h1 className='home-page-nav-archived-events'>Archived Events</h1>
            </div>
            {showFriendsEvents ? (<FriendEventList friendsEvents={friendsEvents}/>) : (null)}
        </div>
    </div>

    )
}

export default UserHomePage
