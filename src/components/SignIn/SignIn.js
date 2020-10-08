import React, { useState, useEffect } from 'react'
import { useAuth } from '../Firebase/Firebase'

import './SingIn.css'

import { Link, useHistory } from 'react-router-dom'

const SignIn = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')

    const auth = useAuth();
    
    const clearErrors = () => {
      setPasswordError('')
      setEmailError('')
    }

    let history = useHistory()

    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        await auth.signin(email, password)
        history.push('/account')
      } catch(err) {
        console.log(err)
      }
    }

    return (
        <div className="signin-contianer">
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
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p>{passwordError}</p>
                <>
                    <button type="submit" onClick={onSubmit}>Sign In</button>
                    <p><Link to="/forgot-password">Forgot Password?</Link></p>
                    <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                </>
            </div>
        </div>
    )
}

export default SignIn
