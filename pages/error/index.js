import React from "react";
import { useState, useEffect } from "react";

import styles from "./Error.module.scss";

import NotLivePerson from "../../components/notliveperson/Notliveperson";

const ErrorPage = () => {
    // setInterval to show 'Need help' button after 15seconds
    // https://www.youtube.com/watch?v=jP62dlwaqpk & https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
    const [delayComponent, setDelayComponent] = useState(false);

    // useEffect(() => {
    //     setInterval(() => {
    //         setDelayComponent(!delayComponent);
    //     }, 40000);
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setDelayComponent(!delayComponent);
        }, 30000);
        return () => clearInterval(interval);
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // I turned off linting as was getting lint error when running local build https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook)
    
    // NotLivePerson state - Tut https://www.youtube.com/watch?v=RcA88ABRUds
    const [nlpModalState, setnlpModalState] = useState(false)
    function opennlpModal() {
        setnlpModalState(!nlpModalState)
    }

    return (
        <>
            <div className={styles.errorContainer}>
                <h1>We&apos;re sorry something&apos;s gone wrong</h1>
                <p className="p-lead">There was a technical issue on our end. But don&apos;t worry, we&apos;ve saved your information from Rightmove.</p>
                <p>Please try again in a few minutes. You&apos;ll need to return to your confirmation email from Rightmove. Then follow the link to continue your home buying journey.</p>
                <p>If you keep having issues, use the &apos;Need help&apos; web chat to get in touch. We&apos;re available Monday to Friday from 8am to 5pm and Saturday from 9am to 3pm.</p>
            </div>
            <NotLivePerson toggle={nlpModalState} action={opennlpModal} />

            {/* Way to show on screen that true/false value for nlpModalState */}
            {/* {nlpModalState.toString()} */}

            {delayComponent &&
                <div className="togglemodal-container">
                    <span className="togglemodal" onClick={opennlpModal}>Need help?</span>
                </div>
            }
        </>

    )
}

export default ErrorPage;