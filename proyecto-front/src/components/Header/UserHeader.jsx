import React from 'react'
import { Link } from 'react-router-dom'
import './UserHeader.css'

function UserHeader() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>

                <Link to="/" className='logo-container'>
                    <img src='/images/logo.png' alt='logo' />
                    <p>Sentite como en tu hogar </p>
                </Link>


                <div className='username-container'>
                    <div className='avatar'>
                        <p>AT</p>
                    </div>
                    <div className='greetings'>
                        <h4 style={{color:"#000", opacity:"50%"}} >Hola,</h4>
                        <h4 style={{color:"#1DBEB4"}} >Alex Turner</h4>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default UserHeader