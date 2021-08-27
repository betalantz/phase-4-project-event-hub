import React from "react";
import Friend from "./Friend";


const Friends = ({ friends, setFriends }) => {


 

  const displayFriends = friends.map((friend) => {
    return (
        <Friend key={friend.id} friend={friend} allFriends={friends}setFriends={setFriends}/>
    );
  }); 

  return (
    <div>
      <h1 className='friends-list-header'>Friends List</h1>
      <div className='friends-list-line'></div>

      <div className='friend-card-container'>
      {displayFriends}
    </div>
    </div>
  )
};

export default Friends;

