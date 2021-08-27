import Avatar, { ConfigProvider } from 'react-avatar';


const Friend = ({ friend, setFriends, allFriends }) => {

  function handleDeleteFriend(friend){
    let friends = allFriends.filter(oldFriend => oldFriend.id !== friend.id)
    fetch(`/friendships/${friend.id}`, {
      method: "DELETE"
    })
    .then(setFriends(friends))
  }


  return (
    <div className='friend-card-div'>
      <ConfigProvider colors={['pink', 'orange', 'black', 'green', 'red','lightBlue']}>
                <Avatar
                        round={true}
                        size={50}
                        className="search-avatar-photo"
                        name={friend.name}
      />
      </ConfigProvider>
      <h1 className='friends-list-username'>{friend.username}</h1>
      <button className='remove-friend-btn' onClick={() => handleDeleteFriend(friend)}>Unfriend {friend.name}</button>
    </div>
  );
};

export default Friend;




        