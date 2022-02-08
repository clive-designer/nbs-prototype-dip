import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from 'next/link';

import styles from './Dashboard.module.scss';
import Dashboardcard from "../../components/dashboardcard/Dashboardcard";

import Image from 'next/image';
import houseMain from '../../public/images/house-main-sm-dashboard.svg';
import successIcon from '../../public/images/success-icon.svg';

const dashboard = () => {
    return (
        <div>
            <div className={styles.dashboardMainContainer}>
                <div className={styles.dashboardMain}>
                    <div className={styles.messageSuccess}>
                        <div className={styles.messageSuccessIcon}>
                            <Image src={successIcon} alt="Image of tick"/>
                        </div>  
                        <div className={styles.messageSuccessText}>
                            <p>You&apos;re logged in securely</p>
                        </div>
                    </div>
                    <h1>Welcome to your mortgage dashboard</h1>
                    <hr className="hr-red" />
                    <p className="p-lead">Take the next steps towards your new home. We&apos;ll save your progress so you can come back when you like.</p>
                    <h2>Apply for your mortgage in just 3 steps</h2>
                    <Dashboardcard />
                </div>
            </div>

            <div className={styles.dashboardImgContainer}>
                <div className={styles.dashboardImage}>
                    <Image src={houseMain} alt="Image of house"/>     
                </div>
            </div>
        </div>

    )
}

export default dashboard;

export const getServerSideProps = withPageAuthRequired();