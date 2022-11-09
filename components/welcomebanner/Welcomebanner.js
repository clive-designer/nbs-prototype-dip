import { useState, useEffect } from 'react';

import styles from './Welcomebanner.module.scss'

import Image from 'next/image';
import infoIcon from '../../public/images/IconInformation.svg';

const Welcomebanner = () => {
    // Tut useState to create the dismissible banner https://www.youtube.com/watch?v=rWfhwW9forg&t=240s
    const [showWelcomebanner, setShowWelcomebanner] = useState(true);

    useEffect(() => {
        // Use local storage so once banner is dismissed it does not return on page refresh
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        // This block of code hydrates the state so on page refresh the banner stays false and does not show
        const data = window.localStorage.getItem('NBS_PROTOTYPE_AUTH_APP_WELCOME_BANNER');
        if (data !== null) setShowWelcomebanner(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('NBS_PROTOTYPE_AUTH_APP_WELCOME_BANNER', JSON.stringify(showWelcomebanner))
    }, [showWelcomebanner])

    return (
        <>
            {showWelcomebanner && (
                <div className="messagebanner-wrapper welcome-banner-wrapper">
                    <div className="messagebanner">
                        <div className="messagebanner-content">
                            <div className="messagebanner-icon">
                                <Image src={infoIcon} alt="Image of tick" />
                            </div>
                            <div className="messagebanner-text">
                                <p><strong>Welcome:&nbsp;</strong>you&#39;ve arrived from Rightmove</p>
                            </div>
                        </div>
                        <div className="messagebanner-close">
                            <button className="nbs-btn-secondary" onClick={() => setShowWelcomebanner(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Welcomebanner;