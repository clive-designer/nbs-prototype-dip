import styles from './Dashboardcard.module.scss'

// Nudge animation: https://blog.sethcorker.com/react-framer-motion-animate-when-scrolled-into-view/
// https://codesandbox.io/s/framer-motion-animate-when-scrolled-into-view-7zksx?

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import BouncyArrow from "../../components/bouncyarrow/BouncyArrow";
import Banner from "../../components/banner/Banner";

// 



// How to work with local images https://nextjs.org/docs/basic-features/image-optimization#local-images
import Image from 'next/image';
import step1dashboard from '../../public/images/step1-dashboard.svg';
import step2dashboard from '../../public/images/step2-dashboard.svg';
import step3dashboard from '../../public/images/step3-dashboard.svg';
import successIcon from '../../public/images/success-icon1.svg';

import Link from 'next/link';


const Dashboardcard = () => {

        // Nudge ui
        const [wasDismissed, setWasDismissed] = useState(false);
        const dismiss = () => setWasDismissed(true);
        const restore = () => setWasDismissed(false);
        // 

    return (
        <div>
            <div className={styles.dashboardCard}>
                <div className={styles.dashboardCardBody}>
                    <div className={styles.dashboardCardImg}>
                        <Image src={step1dashboard} alt="Image of house"/> 
                    </div>
                    <div className={styles.dashboardCardText}>
                        <span className={styles.labelSuccess}>Complete</span>
                        <h3>Step 1: Get your Decision in Principle</h3>
                        <p>Use your DIP certificate to view properties and make offers.</p>
                        <p>If anything changes - like your deposit or how long you want to borrow for - edit your DIP and get a new result.</p>
                    </div>
                </div>
                <div className={styles.dashboardCardFooter}>
                    <div className={styles.dbCardFooterIcon}>
                        <Image src={successIcon} alt="Image of tick"/>
                    </div>
                    <div className={styles.dbCardFooterText}>
                        <span className={styles.dbFooterinfo}><strong>&pound;200,000 over 31 years 2 months:</strong> valid until 10/05/2022</span>
                        <Link href="#">
                            <a className="nbs-link">Review and edit your DIP</a>
                        </Link>
                    </div>

                </div>
            </div>

            {/* <BouncyArrow /> */}
            {/* <p style={{ height: "20vh" }}>Keep scrolling</p> */}
            <div className="overlay-wrapper" >
                <AnimatePresence>
                {!wasDismissed && <Banner onDismiss={dismiss} />}
                </AnimatePresence>
            </div>

            <div className={styles.dashboardCard}>
                <div className={styles.dashboardCardBody}>
                    <div className={styles.dashboardCardImg}>
                        <Image src={step2dashboard} alt="Image of house"/>
                    </div>
                    <div className={styles.dashboardCardText}>
                        <h3>Step 2: Tell us about your new home</h3>
                        <p>Add some details about the property to your application.</p>
                        <Link href="#">
                            <a className="nbs-btn-secondary">Add property details</a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.dashboardCard}>
                <div className={styles.dashboardCardBody}>
                    <div className={styles.dashboardCardImg}>
                        <Image src={step3dashboard} alt="Image of house"/>
                    </div>
                    <div className={styles.dashboardCardText}>
                        <h3>Step 3: Chat to a mortgage expert</h3>
                        <p>Complete your  application with one of our mortgage experts. Your reference is: <strong>M123456789</strong></p>
                        <Link href="#">
                            <a className="nbs-btn-secondary">Let&apos;s chat</a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboardcard;