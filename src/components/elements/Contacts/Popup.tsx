import { useTranslation } from 'react-i18next';
import Address from './Address';
import CloseButton from './CloseButton';
import styles from './Contacts.module.scss';
import Map from './Map';
import Messengers from './Messengers';
import { PropsPopupContact } from '../../../Interfacies/Interfacies';

function Popup(props: PropsPopupContact) {
    let content = document.getElementById('popup_back');
    let { t } = useTranslation();
    function close() {
        content?.addEventListener('click', function (e) {
            if (!(e?.target as Element).closest('#popup_content')) {
                props.setContactActive(false);
            }
        })
    }
    let body = document.querySelector('body');
    if (props.contactActive) {
        if (body) {
          body.style.overflow = "hidden";  
        }

    }
    else{
        if (body) {
            body.style.overflow = "visible";  
          }
    }
    return (
        <div className={props.contactActive ? styles.popup_back_open : styles.popup_back} id="popup_back">
            <div className={styles.popup_body} onClick={() => close()}>
                <div className={styles.popup_content} id='popup_content'>
                    <div className={styles.title_popup}><h2>{t("contacts")}</h2><CloseButton contactActive={props.contactActive} setContactActive={props.setContactActive} /></div>
                    <div className={styles.row}><Address />
                        <Map />
                    </div>
                    <div className={styles.row}><Messengers /></div>

                </div>
            </div>
        </div>
    )
}
export default Popup;