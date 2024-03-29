import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from 'next/link';

import styles from './Dashboard.module.scss';
import Dashboardcard from "../../components/dashboardcard/Dashboardcard";
import Contactprefs from "../../components/contactprefs/Contactprefs";

import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Nudge animation: https://blog.sethcorker.com/react-framer-motion-animate-when-scrolled-into-view/
// https://codesandbox.io/s/framer-motion-animate-when-scrolled-into-view-7zksx?
import BouncyArrow from "../../components/bouncyarrow/BouncyArrow";
import Banner from "../../components/banner/Banner";
import NotLivePerson from "../../components/notliveperson/Notliveperson";

// https://fkhadra.github.io/react-toastify/installation
import { ToastContainer, toast, cssTransition, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Image from 'next/image';
import houseMain from '../../public/images/house-main-sm-dashboard.svg';
import successIcon from '../../public/images/success-icon1.svg';


export default function Dashboard() {
    // const dashboard = () => {

    // react-toastify - with onClick button method
    // const notify = () => {
    //     toast.success("You've logged in securely");
    //   };

    // https://stackoverflow.com/questions/70562587/how-do-i-make-to-appear-the-react-toastify-without-using-onclick-button-it-shou
    // How to get notification to show on page load without onClick button
    const slideInOut = cssTransition({
        enter: "slide-in-bottom",
        exit: "slide-out-bottom"
    });

    useEffect(() => {
        const notify = () => toast.success("You've logged in securely", {
            autoClose: 12000,
            position: toast.POSITION.BOTTOM_CENTER,
            transition: slideInOut
        });

        notify();
    }, [])

    // setInterval to show 'Need help' button after 15seconds
    // https://www.youtube.com/watch?v=jP62dlwaqpk & https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
    const [delayComponent, setDelayComponent] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setDelayComponent(!delayComponent);
        }, 30000);
        return () => clearInterval(interval);
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // I turned off linting as was getting lint error when running local build https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook)
    
    // NotLivePerson state - Tut https://www.youtube.com/watch?v=RcA88ABRUds
    const [nlpModalState, setnlpModalState] = useState(false)
    function opennlpModal() {
        setnlpModalState(!nlpModalState)
    }

    // Nudge ui
    const [wasDismissed, setWasDismissed] = useState(false);
    const dismiss = () => setWasDismissed(true);
    const restore = () => setWasDismissed(false);
    // 

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

            {delayComponent &&
                <div className="togglemodal-container">
                    <span className="togglemodal" onClick={opennlpModal}>Need help?</span>
                </div>
            }

        </div>

    )
}

// export default dashboard;

export const getServerSideProps = withPageAuthRequired();