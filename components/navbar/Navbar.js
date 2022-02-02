import Link from "next/link";

import styles from './Navbar.module.scss';

import Image from 'next/image';
import nbsLogoMobile from '../../public/images/NBS-Icon-mobile.svg';
import nbsLogin from '../../public/images/Log-in-button-icon.svg';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <Image src={nbsLogoMobile} alt="Nationwide logo"/> 
            </div>
            <div className="nav-content">
                <div className="nav-ref">
                    <p>Ref: M123456789</p>
                </div>
                <div>
                    <Link href="/access-dashboard">
                        <a className="nav-login-icon">
                            <Image src={nbsLogin} alt="Log in"/>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;