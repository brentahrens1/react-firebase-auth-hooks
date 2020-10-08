import React from 'react'

import { useAuth } from '../Firebase/Firebase'

const Account = (props) => {

    const auth = useAuth()
    
    return (
        <div>
            {
                auth.user ? (
                    <h1>{auth.user.email}</h1>
                ):
                (
                    <h1>You must login to access your account</h1>
                )
            }
        </div>
    )
}

export default Account