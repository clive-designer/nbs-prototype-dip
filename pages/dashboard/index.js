import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from 'next/link';

import styles from './Dashboard.module.scss';
import Dashboardcard from "../../components/dashboardcard/Dashboardcard";

// Nudge animation: https://blog.sethcorker.com/react-framer-motion-animate-when-scrolled-into-view/
// https://codesandbox.io/s/framer-motion-animate-when-scrolled-into-view-7zksx?

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import BouncyArrow from "../../components/bouncyarrow/BouncyArrow";
import Banner from "../../components/banner/Banner";

// 

import Image from 'next/image';
import houseMain from '../../public/images/house-main-sm-dashboard.svg';
import successIcon from '../../public/images/success-icon.svg';

export default function Dashboard() {
// const dashboard = () => {

    // Nudge ui
    const [wasDismissed, setWasDismissed] = useState(false);
    const dismiss = () => setWasDismissed(true);
    const restore = () => setWasDismissed(false);
    // 

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
                    {wasDismissed && (
                        <button onClick={restore} className="restore-btn">
                        Bring back the banner!
                        </button>
                    )}
                    <hr className="hr-red" />
                    <p className="p-lead">Take the next steps towards your new home. We&apos;ll save your progress so you can come back when you like.</p>
                    <h2>Apply for your mortgage in just 3 steps</h2>
                    <BouncyArrow />
                        <p style={{ height: "50vh" }}>Keep scrolling</p>
                        <div className="overlay-wrapper" >
                            <AnimatePresence>
                            {!wasDismissed && <Banner onDismiss={dismiss} />}
                            </AnimatePresence>
                        </div>
                    <BouncyArrow />
                    <p style={{ height: "50vh" }}>
                        Now scroll a bit more to see it stick to the top of the viewport
                    </p>
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

// export default dashboard;

// export const getServerSideProps = withPageAuthRequired();