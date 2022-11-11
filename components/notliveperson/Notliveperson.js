import styles from './Notliveperson.module.scss'


export default function NotLivePerson(props) {
    const nlpModalState = props.toggle
    const action = props.action

    return (
        <div className={`${styles.NLPContainer} ${nlpModalState ? styles.active : ''}`}>
            <div className={styles.NLPModal}>
                <div className={styles.NLPModalHeader}>
                    <div className={styles.NLPTitle}>
                        <p>Chat with us</p>
                    </div>
                    <div className={styles.NLPContols}>
                        <div className={styles.NLPClose} onClick={action}></div>
                    </div>
                </div>
                <div className={styles.NLPModalBody}>
                    <div className={styles.NBSAvatar}></div>
                    <div className={styles.NBSpeechbubble}><p className="p-small">Welcome to Nationwide&apos;s messaging service</p></div>
                </div>
                <div className={styles.NLPModalFooter}>
                    <div className={styles.NBSChatContent}>
                        <p>Enter text here</p>
                    </div>

                    <div className={styles.NBSChatSubmit}></div>
                </div>

            </div>
        </div>
    );
}
