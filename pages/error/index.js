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
                <h1>Sorry, something&apos;s gone wrong</h1>
                <p className="p-lead">There was a technical issue that wasn&apos;t your fault.</p>
                <p className="p-lead">We&apos;ve saved your information from Rightmove, so no need to worry.</p>
                <p>Please try again in a few minutes, you&apos;ll need to return to your Rightmove result/confirmation email and follow the link to continue your home buying journey.</p>
                <p>If you continue to have issues you can contact us using the &apos;Need help?&apos; web chat service on this page, which is available Monday to Friday 8am to 5pm, and Saturday 9am to 3pm.</p>
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