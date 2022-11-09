import styles from './Memberbanner.module.scss'

const Memberbanner = () => {
    return (
        <div>
            <div className={styles.memberCard}>
                <h2 className='h2-cabernet'>Our mortgages make you a member</h2>
                <p>Choosing a mortgage from us, you become part of a Society that's 15 million members strong.</p>
            </div>
        </div>
    );
}

export default Memberbanner;