import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from 'next/link';

import styles from './Dashboard.module.scss';
import Dashboardcard from "../../components/dashboardcard/Dashboardcard";
import Contactprefs from "../../components/contactprefs/Contactprefs";


// Nudge animation: https://blog.sethcorker.com/react-framer-motion-animate-when-scrolled-into-view/
// https://codesandbox.io/s/framer-motion-animate-when-scrolled-into-view-7zksx?

import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import BouncyArrow from "../../components/bouncyarrow/BouncyArrow";
import Banner from "../../components/banner/Banner";

// https://fkhadra.github.io/react-toastify/installation
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import Image from 'next/image';
import houseMain from '../../public/images/house-main-sm-dashboard.svg';
import successIcon from '../../public/images/success-icon1.svg';
import NotLivePerson from "../../components/notliveperson/Notliveperson";

export default function Dashboard() {
    // const dashboard = () => {

    // react-toastify - with onClick button method
    // const notify = () => {
    //     toast.success("You've logged in securely");
    //   };


    // https://stackoverflow.com/questions/70562587/how-do-i-make-to-appear-the-react-toastify-without-using-onclick-button-it-shou
    // How to get notification to show on page load without onClick button
    useEffect(() => {
        const notify = () => toast.success("You've logged in securely", {
            autoClose: 8000
        });

        notify();
    }, [])


    // Nudge ui
    const [wasDismissed, setWasDismissed] = useState(false);
    const dismiss = () => setWasDismissed(true);
    const restore = () => setWasDismissed(false);
    // 

    // NotLivePerson state - Tut https://www.youtube.com/watch?v=RcA88ABRUds
    const [nlpModalState, setnlpModalState] = useState(false)
    function opennlpModal() {
        setnlpModalState(!nlpModalState)
    }

    return (
        <div>
            <div className={styles.dashboardMainContainer}>
                <div className={styles.dashboardMain}>
                    {/* <button onClick={notify}>Notify !</button> */}
                    <ToastContainer />
                    {/* <div className={styles.messageSuccess}>
                        <div className={styles.messageSuccessIcon}>
                            <Image src={successIcon} alt="Image of tick"/>
                        </div>  
                        <div className={styles.messageSuccessText}>
                            <p>You&apos;re logged in securely</p>
                        </div>
                    </div> */}
                    <h1>Welcome to your mortgage hub</h1>
                    {wasDismissed && (
                        <button onClick={restore} className="restore-btn">
                            Bring back the banner!
                        </button>
                    )}
                    <hr className="hr-red" />
                    <p className="p-lead">Take the next steps towards your new home. We&apos;ll save your progress so you can come back when you like.</p>
                    <h2>Apply for your mortgage in just 3 steps</h2>

                    <Dashboardcard />

                    {/* <BouncyArrow /> */}
                    {/* <p style={{ height: "20vh" }}>Keep scrolling</p>
                        <div className="overlay-wrapper" >
                            <AnimatePresence>
                            {!wasDismissed && <Banner onDismiss={dismiss} />}
                            </AnimatePresence>
                        </div>    */}
                    <hr className={styles.dashboardHr} />

                    <Contactprefs />

                    <p style={{ height: "34vh" }}></p>
                </div>
            </div>

            {/* <div className={styles.dashboardImgContainer}>
                <div className={styles.dashboardImage}>
                    <Image src={houseMain} alt="Image of house"/>     
                </div>
            </div> */}

            <NotLivePerson toggle={nlpModalState} action={opennlpModal} />
            {/* Way to show on screen that true/false value for nlpModalState */}
            {/* {nlpModalState.toString()} */}

            <div className="togglemodal-container">
                <span className="togglemodal" onClick={opennlpModal}>Need help?</span>
            </div>

        </div>

    )
}

// export default dashboard;

export const getServerSideProps = withPageAuthRequired();