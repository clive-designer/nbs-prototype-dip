import styles from './IconList.module.scss'

import Image from 'next/image';
import successIcon from '../../public/images/success-icon1.svg';

const IconList = () => {
    return (
        <div>
            <div className={styles.iconList}>
                <div className={styles.iconListIcon}>
                    <Image src={successIcon} alt="Image of tick"/>
                </div>
                <div className={styles.iconListText}>
                    <p>
                        <strong>Review and edit your Decision in Principle</strong>
                    </p>
                </div>
            </div>
            <div className={styles.iconList}>
                <div className={styles.iconListIcon}>
                    <Image src={successIcon} alt="Image of tick"/>
                </div>
                <div className={styles.iconListText}>
                    <p>
                        <strong>Tell us about your new home</strong>
                    </p>
                </div>
            </div>
            <div className={styles.iconList}>
                <div className={styles.iconListIcon}>
                    <Image src={successIcon} alt="Image of tick"/>
                </div>
                <div className={styles.iconListText}>
                    <p>
                        <strong>Book an appointment</strong>
                        <br />
                        to complete your mortgage application with one of our mortgage experts
                    </p>
                </div>
            </div>

        </div>
    );
}

export default IconList;