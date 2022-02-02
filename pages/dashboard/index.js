import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from 'next/link';

import styles from './Dashboard.module.scss';
import Dashboardcard from "../../components/dashboardcard/Dashboardcard";

import Image from 'next/image';
import houseMobile from '../../public/images/House-Startpage-Mobile.svg';

const dashboard = () => {
    return (
        <div>
            <div className={styles.messageSuccess}>
                <p>You&apos;re logged in securely</p>
            </div>
            <h1>Welcome to your mortgage dashboard</h1>
            <hr className="hr-red" />
            <p className="p-lead">Take the next steps towards your new home. We&apos;ll save your progress so you can come back when you like.</p>
            <div className={styles.dashboardHero}>
                <Image src={houseMobile} alt="Image of house"/>     
            </div>
            <h2>Apply for your mortgage in just 3 steps</h2>
            <Dashboardcard />
            <Link href="/api/auth/logout">
                <a>Log out</a>
            </Link>
        </div>
    )
}

export default dashboard;

export const getServerSideProps = withPageAuthRequired();