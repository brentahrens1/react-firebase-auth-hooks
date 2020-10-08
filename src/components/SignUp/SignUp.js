import React, { useState, useEffect } from 'react'
import { useAuth } from '../Firebase/Firebase'

import './SignUp.css'

import {Link, useHistory} from 'react-router-dom'

const SignUp = () => {
    const [ email, setEmail ] = useState('')
    const [ passwordOne, setPasswordOne ] = useState('')
    const [ passwordTwo, setPasswordTwo ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')

    const auth = useAuth();
    
    const clearErrors = () => {
    setPasswordError('')
    setEmailError('')
    }

    const history = useHistory()

    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        await auth.signup(email, passwordOne)
        history.push('/account')
      } catch(err) {
        console.log(err)
      }
    }

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === ''

    return (
        <div className="signup-contianer">
            <div>
                <label>Username</label>
                <input 
                    type="text" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <p>{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={passwordOne}
                    onChange={e => setPasswordOne(e.target.value)}
                />
                <p>{passwordError}</p>
                <label>Re Enter Password</label>
                <input
                    type="password"
                    required
                    value={passwordTwo}
                    onChange={e => setPasswordTwo(e.target.value)}
                />
                <p>{passwordError}</p>
                    <>
                      <button disabled={isInvalid} type="submit" onClick={onSubmit}>Sign Up</button>
                      <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
                    </>
            </div>
        </div>
    )
}

export default SignUp