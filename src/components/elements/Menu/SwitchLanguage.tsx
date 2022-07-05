import styles from './Menu.module.scss';
import i18next from "i18next";
import HandleSwitch from './HandleSwitch';
import { useEffect, useState } from 'react';

function SwitchLaguage() {
    let [popupSwitchActive, setResumePopupActiveSwitch] = useState(false);

    useEffect(() => {
    }, [popupSwitchActive]);

    return (
        <div className={styles.switcher} onClick={() => setResumePopupActiveSwitch(!popupSwitchActive)}>
            {i18next.language}
            <div className={popupSwitchActive ? styles.choose_lang_box_active : styles.choose_lang_box} >
                {i18next.language === "en" ? '' :
                    <div className={styles.lang_box} id="en" onClick={HandleSwitch}>
                        en

                    </div>}
                {i18next.language === "ru" ? '' :
                    <div className={styles.lang_box} id="ru" onClick={HandleSwitch}>
                        ru
                    </div>
                }
                {i18next.language === "no" ? '' : <div className={styles.lang_box} id="no" onClick={HandleSwitch}>
                    no
                </div>}
                {i18next.language === "uk" ? '' :
                    <div className={styles.lang_box} id="uk" onClick={HandleSwitch}>
                        uk
                    </div>
                }

            </div>
        </div>
    )
}
export default SwitchLaguage;