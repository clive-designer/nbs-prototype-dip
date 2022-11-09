import React from "react";
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

import styles from './Access-dashboard.module.scss';

const AccessDashboard = () => {    
    const { user, error, isLoading } = useUser();

    console.log(user);

    if(isLoading) return <div>... Loading</div>
    if(error) return <div>{error.message}</div>

    if(user) {
        return (
          <div>
            <h1>Hi {user.email}</h1>
            
            <Link href="/api/auth/logout">
              <a>Logout</a>
            </Link>
            <p>Or</p>
            
            <Link href="/dashboard/">
                <a>Go to your dashboard</a>
            </Link>
          </div>
        )
    }

    return (
        <div className={styles.accessDashboardContainer}>
            <h1>Access your mortgage dashboard</h1>
            <p className={styles.pAccessDashboard}>When you log in, we may ask you to go through a 2-step verification process using your mobile device and email account. This helps us keep your information safe.</p>

            <Link href="/dashboard/">
              <a className="nbs-btn-primary">Log in</a>
            </Link>

        </div>
    )
}

export default AccessDashboard;