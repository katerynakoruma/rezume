import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';
import CallMessageIcon from './icons/CallMessageIcon';
import styles from './Contacts.module.scss';
import Copy from './Copy';
import FacebookMessengerIcon from './icons/FacebookMessengerIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import PhoneIcon from './icons/PhoneIcon';
import TelegramIcon from './icons/TelegramIcon';
import Tooltip from './Tooltip';
import ViberIcon from './icons/ViberIcon';
import WhatsappIcon from './icons/WhatsappIcon';

function Messengers() {
    let ukrainianNumber = "+380509089771";
    let norwayNumber = "+4795200779";
    let [copyAction, setCopyAction] = useState(false);
    let [copyText, setCopyText] = useState('');
    let changeStateCopy = () => { setCopyAction(!copyAction) };
    let {t} = useTranslation();

    function stateCopyToInitial() {
        setCopyAction(!copyAction);
    };

    useEffect(() => {
        if (copyAction) {
            setTimeout(changeStateCopy, 2000);
        }

    }, [copyAction, <Tooltip />])

    return (
        <div className={styles.container_mes}>
            <div className={styles.title_mes}>
                <CallMessageIcon />
                <div className={styles.div_h3}><h3>{t("call_mes")}</h3></div>

            </div>
            <div className={styles.row_phones}>
                <div className={styles.phone_norw}>
                    <div className={styles.icon}><PhoneIcon /></div>
                    <div className={styles.number}><a href='tel:+4795200779'><p>+47 952 00 779</p></a></div>
                    <CopyToClipboard text={norwayNumber} onCopy={() => { stateCopyToInitial(); setCopyText(copyText = norwayNumber); }}>
                        <div className={styles.copy_icon}>
                            <Copy />
                            {copyAction && copyText === norwayNumber ? <div className={styles.norw_tel}>
                                <Tooltip />
                            </div> : null}
                        </div>
                    </CopyToClipboard>

                </div>
                <div className={styles.phone_ukr}>
                    <div className={styles.icon}><PhoneIcon /></div>
                    <div className={styles.number}><a href='tel:+380509089771'><p>+38 050 908 97 71</p></a></div>
                    <CopyToClipboard text={ukrainianNumber} onCopy={() => { stateCopyToInitial(); setCopyText(copyText = ukrainianNumber) }}>
                        <div className={styles.copy_icon}>
                            <Copy />
                            {copyAction && copyText === ukrainianNumber ? <div className={styles.ukr_tel}>
                                <Tooltip />
                            </div> : null}
                        </div>
                    </CopyToClipboard>

                </div>
                <div>

                </div>

            </div>

            <div className={styles.row_messenger}>
                <div className={styles.icon_messenger}><a href="viber://chat?number=380509089771"><ViberIcon /></a></div>
                <div className={styles.icon_messenger}><a href="http://t.me/endless_kate"><TelegramIcon /></a></div>
                <div className={styles.icon_messenger}><a href="https://wa.me/380509089771"><WhatsappIcon /></a></div>
                <div className={styles.icon_messenger}><a href="https://www.linkedin.com/in/kateryna-koruma/"><LinkedinIcon /></a></div>
                <div className={styles.icon_messenger}><a href="https://m.me/ekaterina.koruma"><FacebookMessengerIcon /></a></div>

            </div>

        </div>
    )
}
export default Messengers;