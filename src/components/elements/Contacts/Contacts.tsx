import styles from './Contacts.module.scss';
import Envelope from './Envelope';
import { useEffect, useState } from 'react';
import Popup from './Popup';
import { useTranslation } from 'react-i18next';


function Contacts() {
    let [contactActive, setContactActive] = useState(false);
    let { t } = useTranslation();
    useEffect(() => {

    }, [contactActive])

    return (
        <div>
        <div className={styles.contact_btn}>
            <div className={styles.box_bottom} onClick={() => setContactActive(!contactActive)}>
                <div className={styles.sign_contact}><p>{t("contacts")}</p></div>
                <Envelope />
            </div>
            <div className={styles.box_top} onClick={() => setContactActive(!contactActive)}>
            </div>

           
        </div>
        <Popup contactActive={contactActive} setContactActive={setContactActive} />
        </div>
    )
}

export default Contacts;
