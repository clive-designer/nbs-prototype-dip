import { useState, useEffect } from 'react';

import styles from './Cookiebanner.module.scss'

import Image from 'next/image';
import infoIcon from '../../public/images/IconInformation.svg';
import Link from "next/link";

const Cookiebanner = () => {
    // Tut useState to create the dismissible banner https://www.youtube.com/watch?v=rWfhwW9forg&t=240s
    const [showCookiebanner, setShowCookiebanner] = useState(true);

    useEffect(() => {
        // Use local storage so once banner is dismissed it does not return on page refresh
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        // This block of code hydrates the state so on page refresh the banner stays false and does not show
        const data = window.localStorage.getItem('NBS_PROTOTYPE_AUTH_APP_COOKIE_BANNER');
        if (data !== null) setShowCookiebanner(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('NBS_PROTOTYPE_AUTH_APP_COOKIE_BANNER', JSON.stringify(showCookiebanner))
    }, [showCookiebanner])

    return (
        <>
            {showCookiebanner && (
                <div className="messagebanner-wrapper cookie-banner-wrapper">
                    <div className="messagebanner">
                        <div className="messagebanner-content">
                            <div className="messagebanner-icon">
                                <Image src={infoIcon} alt="Image of tick" />
                            </div>
                            <div className="messagebanner-text">
                                <p><strong>Cookie information:&nbsp;</strong> This site uses cookies and by using the site you are consenting to this. Find out why we use cookies and how to manage your settings.<Link href="#">
                                    <a className="">
                                    More about cookies
                                    </a>
                                </Link>
                                    </p>
                            </div>
                        </div>
                        <div className="messagebanner-close">
                            <button className="nbs-btn-secondary" onClick={() => setShowCookiebanner(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cookiebanner;