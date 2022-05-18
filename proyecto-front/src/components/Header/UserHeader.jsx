import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserHeader.css'
import user from '../../jsons/user.json'


function UserHeader() {

    const userName = user[0].name;
    const userLastName = user[0].lastName;

    function getInitials() {
        return userName.split(' ').map(n => n[0]).join('') +
            userLastName.split(' ').map(n => n[0]).join('');
    }

    const initials = getInitials();

    return (
        <nav className='navbar'>
            <div className='navbar-container'>

                <Link to="/" className='logo-container'>
                    <img src='/images/logo.png' alt='logo' />
                    <p>Sentite como en tu hogar </p>
                </Link>

                <div className='username-container'>
                    <div className='avatar'>
                        <p>{initials}</p>
                    </div>
                    <div className='greetings'>
                        <h4 style={{ color: "#000", opacity: "50%" }} >Hola,</h4>
                        <h4 style={{ color: "#1DBEB4" }} >{user[0].name} {user[0].lastName}</h4>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default UserHeader