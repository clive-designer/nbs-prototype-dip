import React from "react";
import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link';

const AccessDashboard = () => {
    // If I want to show user certain content once they have logged in
    // then un comment these lines based on this: https://www.youtube.com/watch?v=jgKRnhJBfpQ
    
    const { user, error, isLoading } = useUser();

    console.log(user);

    if(isLoading) return <div>... Loading</div>
    if(error) return <div>{error.message}</div>

    if(user) {
        return (
          <div>
            <h1>Hi {user.email}</h1>
            {/* <a href="/api/auth/logout">Logout</a> */}
            
            <Link href="/api/auth/logout">
              <a>Logout</a>
            </Link>
            <p>Or</p>
            {/* <a href="/dashboard/">Go to your dashboard</a> */}
            
            <Link href="/dashboard/">
                <a>Go to your dashboard</a>
            </Link>
          </div>
        )
    }

    return (
        <div>
            <h1>Access your mortgage dashboard</h1>
            <p>When you log in, we may ask you to go through a 2-step verification process using your mobile device and email account. This helps us keep your information safe.</p>
            <br />
            <br />
            <br />
            {/* <a href="/dashboard/">Login</a> */}
            
            <Link href="/dashboard/">
                <a>Login</a>
            </Link>
        </div>
    )
}

export default AccessDashboard;