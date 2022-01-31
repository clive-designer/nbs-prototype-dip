import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from 'next/link';

const dashboard = () => {
    return (
        <div>
            <p>You&apos;re logged in securely</p>
            <h1>Your mortgage dashboard</h1>
            <p>Take the next steps towards your new home. Save your progress and come back when you like using the link in your confirmation email.</p>
            <br />
            <br />
            <br />
            {/* <a href="/api/auth/logout">Log out</a> */}
            <Link href="/api/auth/logout">
                <a>Log out</a>
            </Link>
        </div>
    )
}

export default dashboard;

export const getServerSideProps = withPageAuthRequired();