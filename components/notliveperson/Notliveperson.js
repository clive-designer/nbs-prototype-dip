import styles from './Notliveperson.module.scss'


export default function NotLivePerson(props) {
    const nlpModalState = props.toggle
    const action = props.action

    return (
        <div className={`${styles.NLPContainer} ${nlpModalState ? styles.active : ''}`}>
            <div className={styles.NLPModal}>
                <h1>Not live person modal content</h1>
                <div className={styles.NLPClose} onClick={action}></div>
            </div>
        </div>
    );
}
