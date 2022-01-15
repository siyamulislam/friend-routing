import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const FriendsDetails = () => {
    
    const { fid } = useParams(); 
    const [friend, setFriend] = useState([])
    const [address, setAddress] = useState([])
    const [geo, setGeo] = useState([])
    const { name, username, email, phone, website } = friend;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${fid}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFriend(data) 
                setAddress(data.address);
                setGeo(data.address.geo);
            })
    }, []);
    return (
        <div className='fDetails'>
            <h2>Name: {name} <small>({username})</small></h2>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>WebSite{website} </h4>
            <h4>Address: {address.street }</h4>
            <h4>City: { address.city}</h4>
            <h4>Geo: {geo.lat} {geo.lng}</h4>
        </div>
    );
};

export default FriendsDetails;