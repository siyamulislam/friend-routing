import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const {name,username,email,address,phone,website}= props.friend;  
    return (
        <div className='fBox'>
            <h2>{name} <small>({username})</small></h2>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <h4>{website}</h4>
        </div>
    );
};

export default Friend;