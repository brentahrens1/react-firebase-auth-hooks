import React, { useState } from 'react'

import { useAuth } from '../Firebase/Firebase'

import './ForgotPassword.css'

const ForgotPassword = () => {
    const [ email, setEmail ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ msg, setMsg ] = useState('')

    const auth = useAuth();

    const onSubmit = async event => {
        event.preventDefault();
        try {
            await auth.sendPasswordResetEmail(email)
            setMsg('Email has been sent to your inbox')
            setEmail('')
        } catch(err) {
            console.log(err)
        }
    }

    const onChange = event => {
        setEmail(event.target.value);
    }

    return (
        <div className="forgot-password">
            <h1>{msg}</h1>
            <form onSubmit={onSubmit}>
                <label>What's your email</label>
                <input 
                    type="text" 
                    required 
                    value={email} 
                    onChange={onChange} 
                />
                <p>{emailError}</p>
                <button type="submit">Reset</button>
            </form>
        </div>
    )
}

export default ForgotPassword