import Image from 'next/image';
import styles from './Houseimage.module.scss';

const Houseimage = () => {
    return (
        <div className={styles.house}>
            <img src="/images/House-Startpage-Mobile.svg" />     
        </div>
    );
}

export default Houseimage;