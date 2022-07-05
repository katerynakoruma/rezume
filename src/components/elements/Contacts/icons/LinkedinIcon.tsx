import styles from '../Contacts.module.scss';

function LinkedinIcon(){
    return(
        <div>
            <svg display="none">
                <symbol viewBox="0 0 64 64" id="linkedin">
                <g fill-rule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#2864b4"/><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#417dcd"/><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#0f4b9b"/></g><rect fill="#fff" height="27" rx="2" width="8" x="12" y="25"/><circle cx="16" cy="16" fill="#fff" r="5"/><path d="m34 28.64a9.2164 9.2164 0 0 1 8-4.64c5.087 0 10 3 10 11v15a1.9994 1.9994 0 0 1 -2 2h-4a1.9994 1.9994 0 0 1 -2-2v-14a5 5 0 0 0 -10 0v14a1.9994 1.9994 0 0 1 -2 2h-4a1.9994 1.9994 0 0 1 -2-2v-23a1.9994 1.9994 0 0 1 2-2h4a1.9994 1.9994 0 0 1 2 2z" fill="#fff" fill-rule="evenodd"/>

                </symbol>
            </svg>
            <svg className={styles.messenger_icon}>
                <use href="#linkedin"></use>
            </svg>
        </div>
    )
}
export default LinkedinIcon;