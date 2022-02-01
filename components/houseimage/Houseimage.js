import Image from 'next/image';
import houseMobile from '../../public/images/House-Startpage-Mobile.svg';

import styles from './Houseimage.module.scss';

const Houseimage = () => {
    return (
        <div className={styles.house}>
            <Image src={houseMobile} alt="Image of house"/>     
        </div>
    );
}

export default Houseimage;