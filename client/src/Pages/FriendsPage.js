import Friends from "../Components/Friends"
import Avatar from 'react-avatar'
import { useState,useEffect } from 'react'
import Modal from "react-modal";
import Aos from 'aos'
import 'aos/dist/aos.css'



const FriendsPage = ({user}) => {

    const [friends, setFriends] = useState([]);
    const [friendResults, setFriendResults] = useState([])
    const [errors, setErrors] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
      setModalIsOpen(true);
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }

    useEffect(() => {
      fetch("/friendships")
        .then((resp) => resp.json())
        .then((data) => setFriends(data));
    }, []);

    useEffect(() => {
      Aos.init()
  }, [])

    
    function findFriend(e){
        fetch(`/users?username=${e.target.value}` )
        .then(resp => resp.json())
        .then(data => setFriendResults(data))
    }

    function handleAddFriend(newFriend){
        fetch("/friendships", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                friend_a_id: user.id,
                friend_b_id: newFriend.id
            }),
          }).then((resp) => {
            if (resp.ok) {
              setFriends([...friends, newFriend])
            } else {
              resp.json().then((err) => setErrors(err.errors))
            }
            closeModal()
          });
    }


    return (
        <div>
            <h1 className="events-page-header">FRIENDS</h1>
            <button className="add-event-btn" onClick={openModal}>
              Add Friends
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className="Modal"
              overlayClassName="Overlay"
              ariaHideApp={false}
            >
            <div className="search-div">
            <h1 className='search-for-friends-header'>Search for friends</h1>
                <input
                className='search-for-friend-input'
                type="search"
                placeholder="Search by username"
                onChange={findFriend}
                />

            {friendResults ? (friendResults.map(friend => {
                return (
                
                <div key={friend.id} className='searched-friend-div'>
                    <Avatar
                        round={true}
                        size={50}
                        className="search-avatar-photo"
                        name={friend.name}
                        color="lightGrey"
                    />
                    <h1>{friend.username}</h1>
                    <button className='add-friend-btn' onClick={() => handleAddFriend(friend)}>Add friend</button></div>
                )
                })) : (null)}
                </div>
 
            </Modal>

            <div data-aos='fade-up' data-aos-duration='2000' data-aos-easing="ease-in-out">
            <div className='friends-list-div'>
            <Friends friends={friends} setFriends={setFriends}/>
            </div>
            </div>
        </div>
    )
}

export default FriendsPage




      