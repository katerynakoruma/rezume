import { useEffect, useState } from 'react';
import Tooltip from './Tooltip';
import Button from './Button';
import styles from './Contacts.module.scss';
import Copy from './Copy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Email() {
    let textEmail = 'mail@katerynakoruma.com';
    let [copyAction, setCopyAction] = useState(false);
    let [copyText, setCopyText] = useState('');
    let changeStateCopy = () => { setCopyAction(!copyAction) };

    function stateCopyToInitial() {
        setCopyAction(!copyAction);

    };
    useEffect(() => {
        if (copyAction) {
            setTimeout(changeStateCopy, 2000);
        }

    }, [copyAction, <Tooltip />])

    return (
        <div className={styles.email}>
            <div className={styles.row_email}>
                <a href="mailto:mail@katerynakoruma.com"><p>mail@katerynakoruma.com</p></a>
                <CopyToClipboard text={textEmail} onCopy={() => { stateCopyToInitial(); setCopyText(copyText = textEmail); }}><div className={styles.copyed}>
                    <Copy />
                    {copyAction && copyText === textEmail ? <div className={styles.email_copy}>
                        <Tooltip />
                    </div> : null}
                </div>
                </CopyToClipboard>

            </div>
            <div className={styles.row_button}>
                <Button />
            </div>

        </div>
    )
}
export default Email;
