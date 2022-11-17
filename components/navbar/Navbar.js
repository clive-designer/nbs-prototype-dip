import React from "react";
import { useUser } from '@auth0/nextjs-auth0';
import Link from "next/link";

import styles from './Navbar.module.scss';

import Image from 'next/image';
import nbsLogoMobile from '../../public/images/NBS-Icon-mobile.svg';
import nbsLogoDesktop from '../../public/images/NBS-Icon-desktop.svg';
import nbsLogin from '../../public/images/Log-in-button-icon.svg';
import nbsLogout from '../../public/images/Log-out-button-icon.svg';

import { useRouter } from 'next/router';

const Navbar = () => {

    const { user, error, isLoading } = useUser();
    const { asPath } = useRouter();

    if (isLoading) return <div>... Loading</div>
    if (error) return <div>{error.message}</div>

    return (
        <nav>
            <div className="nav-logo-mobile">
                <Image src={nbsLogoMobile} alt="Nationwide logo" />
            </div>
            <div className="nav-logo-desktop">
                <Image src={nbsLogoDesktop} alt="Nationwide logo" />
            </div>
            <div className="nav-content">
                {user && (
                    <>
                        <div className="nav-ref">
                            <p>Ref: M123456789</p>
                        </div>
                        <div>
                            <Link href="/api/auth/logout">
                                <a className="nav-logout-icon">
                                    <Image src={nbsLogout} alt="Log in" className={styles.iconLogout} />
                                </a>
                            </Link>
                        </div>
                    </>

                )}
                {!isLoading && !user && (
                    <>
                        <div className="nav-ref">
                            <p>&nbsp;</p>
                        </div>
                        {/* Removed the login icon Nov 2022, uncommnent below to show again */}
                        {/* <div>
                            <Link href="/access-dashboard">
                                <a className="nav-login-icon">
                                    {asPath !== '/access-dashboard' && <Image src={nbsLogin} alt="Log in" className={styles.iconLogin} />}
                                    
                                </a>
                            </Link>
                        </div> */}
                    </>

                )}

            </div>
        </nav>
    );
}

export default Navbar;