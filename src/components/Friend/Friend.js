import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name,username,email,id,phone,website,address}= props.friend;  
    const navigate= useNavigate ();
    const handelClick=(friendID)=>{
            const url=`/friend/${friendID}`;
            navigate(url)
    }
    return (
        <div className='fBox'>
            <h2>{name} <small>({username})</small></h2>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <h4>{address.street}</h4>
            <h4>{website} <span><Link to={'/friend/'+id}>View details</Link></span></h4> 
            
        <button onClick={()=>handelClick(id)}>Navigate</button>
        </div>
    );
};
 
export default Friend;