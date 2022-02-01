import Link from "next/link";

import styles from './Result-card.module.scss'

const Resultcard = () => {
    return (
        <div className={styles.resultCard}>
            <p>Good news Jamie, we could lend you:</p>
            <h2 className="h2-cabernet">&pound;200,000 over 31 years 2 months</h2>
            <p className="p-smaller">We have emailed your Decision in Principle certificate to:<strong>XX&#x00040;XX.com</strong> </p>
            <Link href="/access-dashboard">
                <a className="nbs-btn-secondary">Access mortgage dashboard</a>
            </Link>
        </div>
    );
}

export default Resultcard;