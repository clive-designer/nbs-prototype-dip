import Link from "next/link";

import styles from './Result-card.module.scss'

import Image from 'next/image';
import successIcon from '../../public/images/success-icon.svg';

const Resultcard = () => {
    return (
        <div className={styles.resultCard}>
            <div className={styles.resultCardHeader}>
                <div className={styles.resultCardIcon}>
                    <Image src={successIcon} alt="Image of tick"/>
                </div>
                <div className={styles.resultCardText}>
                    <h4>Good news Jamie, we could lend you:</h4>
                </div>
            </div>
            
            <h2 className="h2-cabernet">&pound;200,000 over 31 years</h2>
            <p className="p-smaller">We have emailed your Decision in Principle certificate to: <strong>jamie.bromley&#x00040;gmail.com</strong> </p>
            <Link href="/access-dashboard">
                <a className="nbs-btn-secondary">Download as PDF</a>
            </Link>
        </div>
    );
}

export default Resultcard;