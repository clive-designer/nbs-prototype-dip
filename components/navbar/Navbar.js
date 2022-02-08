import React from "react";
import { useUser } from '@auth0/nextjs-auth0';
import Link from "next/link";

import styles from './Navbar.module.scss';

import Image from 'next/image';
import nbsLogoMobile from '../../public/images/NBS-Icon-mobile.svg';
import nbsLogin from '../../public/images/Log-in-button-icon.svg';
import nbsLogout from '../../public/images/Log-out-button-icon.svg';

import { useRouter } from 'next/router';

const Navbar = () => {

    const { user, error, isLoading } = useUser();
    const { asPath } = useRouter();

    if(isLoading) return <div>... Loading</div>
    if(error) return <div>{error.message}</div>

    return (
        <nav>
            <div className="nav-logo">
                <Image src={nbsLogoMobile} alt="Nationwide logo"/> 
            </div>
            <div className="nav-content">
                <div className="nav-ref">
                    <p>Ref: M123456789</p>
                </div>
                {user && (
                    <div>
                        <Link href="/api/auth/logout">
                            <a className="nav-logout-icon">
                                <Image src={nbsLogout} alt="Log in" className={styles.iconLogout}/>
                            </a>
                        </Link>
                    </div>
                )}
                {!isLoading && !user && (
                    <div>
                        <Link href="/access-dashboard">
                            <a className="nav-login-icon">
                                {asPath !== '/access-dashboard' && <Image src={nbsLogin} alt="Log in" className={styles.iconLogin}/>}
                            </a>
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;