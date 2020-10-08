import React, { useState, useEffect } from 'react'
import { useAuth } from '../Firebase/Firebase'

import './Nav.css'

import { Link, useHistory } from 'react-router-dom'

const Nav = (props) => {
    const history = useHistory()

    const auth = useAuth();

    const handleLogout = () => {
        auth.signout()
        history.push('/')
    }

    return (
        <div className="nav">
            <div className="nav-list">
                <Link to='/'>Home</Link>
                <Link to='/'>Services</Link>
                <Link to='/'>About</Link>
                {auth.user ? (
                <>
                    <Link to="/account">Account</Link>
                    <button onClick={handleLogout}>Signout</button>
                </>
                ) : (
                <Link to="/sign-in">Signin</Link>
                )}
            </div>
        </div>
    )
}

export default Nav