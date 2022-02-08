import Image from 'next/image';
import houseMobile from '../../public/images/House-Startpage-Mobile.svg';

import Link from 'next/link';

import styles from './Houseimage.module.scss';

const Houseimage = () => {
    return (
        <div className={styles.house}>
            <Link href="https://nbs.invisionapp.com/console/share/MW387M6FFB/846267273">
                <a target="_blank">
                    <Image src={houseMobile} alt="Image of house"/>
                </a>
            </Link>   
        </div>
    );
}

export default Houseimage;