import styles from './Optioncard.module.scss'

import Image from 'next/image';
import successIcon from '../../public/images/success-icon.svg';

const Optioncard = () => {
    return (
        <div>
            <div className={styles.optionCard}>
                <div className={styles.optionCardIcon}>
                    <Image src={successIcon} alt="Image of tick"/>
                </div>
                <div className={styles.optionCardText}>
                    <p>
                        <strong>Pay it off quicker?</strong>
                        <br />
                        We may be able to lend you <strong>&pound;200,000</strong> over <strong>25 years</strong>.
                    </p>
                </div>
            </div>
            <div className={styles.optionCard}>
            <div className={styles.optionCardIcon}>
                    <Image src={successIcon} alt="Image of tick"/>
                </div>
                <div className={styles.optionCardText}>
                    <p>
                        <strong>Borrow more?</strong>
                        <br />
                        We may be able to lend you up to <strong>&pound;211,000</strong> over <strong>31 years</strong>.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Optioncard;