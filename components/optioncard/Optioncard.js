import styles from './Optioncard.module.scss'

const Optioncard = () => {
    return (
        <div>
            <div className={styles.optionCard}>
                <p>
                    Pay it off quicker?
                    <br />
                    We may be able to lend you £200,000 over 25 years.
                </p>
            </div>
            <div className={styles.optionCard}>
                <p>
                    Borrow more?
                    <br />
                    We may be able to lend you up to £211,000 over 31 years.
                </p>
            </div>

        </div>
    );
}

export default Optioncard;