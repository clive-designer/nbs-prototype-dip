import styles from './Contactprefs.module.scss'

// How to work with local images https://nextjs.org/docs/basic-features/image-optimization#local-images
import Image from 'next/image';
import step3dashboard from '../../public/images/step3-dashboard.svg';

import Link from 'next/link';


const Contactprefs = () => {
    return (
        <div>

            <div className={styles.dashboardCard}>
                <div className={styles.dashboardCardBody}>
                    <div className={styles.dashboardCardImg}>
                        {/* <Image src={step3dashboard} alt="Image of house"/> */}
                    </div>
                    <div className={styles.dashboardCardText}>
                        <h3>Let&apos;s stay in touch</h3>
                        <p>We can send you reminders and support with your next steps. Manage your preferences to let us know you&apos;re happy to get these emails.</p>
                        <p>This will not update any other marketing preferences you hold with us.</p>
                        <Link href="#">
                            <a className="nbs-btn-secondary">Manage email preferences</a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contactprefs;