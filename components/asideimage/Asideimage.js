import Image from 'next/image';
import asideImage from '../../public/images/member-photo.jpg';

import Link from 'next/link';

const Asideimage = () => {
    return (
        <div>
            <Image src={asideImage} alt="Image of member offering cake" />
        </div>
    );
}

export default Asideimage;