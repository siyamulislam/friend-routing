import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const url = 'https://jsonplaceholder.typicode.com/users/'
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(friend =>   setFriends(friend))
    }, []); 
    return (
        <div>
            <h2> Friends List: {friends.length}</h2>
           {friends.map(friend=> <Friend  key={friend.id} friend={friend}></Friend>)}
        </div>
    );
};

export default Home;