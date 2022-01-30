import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const dashboard = () => {
    return (
        <div>
            <h1>Mortgage dashboard - Members only !!</h1>
        </div>
    )
}

export default dashboard;

export const getServerSideProps = withPageAuthRequired();