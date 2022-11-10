import Image from 'next/image';
import asideImage from '../../public/images/member-photo.jpg';

import Link from 'next/link';

const Asideimage = () => {
    return (
        <div>
            <Link href="https://nbs.invisionapp.com/console/share/6Q4KPM8W7VJ">
                <a target="_blank">
                    <Image src={asideImage} alt="Image of member offering cake"/>
                </a>
            </Link>   
        </div>
    );
}

export default Asideimage;