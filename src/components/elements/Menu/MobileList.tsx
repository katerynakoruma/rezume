import { useEffect } from 'react';
import CloseButton from '../Contacts/CloseButton';
import styles from './Menu.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import {changeLanguage} from "i18next";
import { useTranslation } from 'react-i18next';
import {PropsPopupMenu} from '../../../Interfacies/Interfacies';

function MobileList(props: PropsPopupMenu) {
    let switcher = document.getElementById('switch_mobile_lg');
    let {t} = useTranslation();
    let content = document.getElementById('mobilelist_back');

    switcher?.addEventListener('change', function(event){
        changeLanguage((event.target as HTMLTextAreaElement).value);
    })

    function close(arg: Event) {
        if (!(arg?.target as Element).closest('#mobilelistContent')) {
            props.setMenuActive(false);
        }
        else {

        }
    }
    content?.addEventListener('click', function (e) {
        close(e);
    })

    useEffect(() => {
       
    }, [props.menuActive])
    return (
        <div className={props.menuActive ? styles.mobilelist_back_open : styles.mobilelist_back } id="mobilelist_back">
            <div className={styles.mobilelist_body}>
                <div className={styles.mobilelist_content} id = "mobilelistContent">
                    <div className={styles.title}>
                        <span className={styles.h3}>{t("menu")}</span>
                        <CloseButton contactActive={props.menuActive} setContactActive={props.setMenuActive} />
                    </div>

                    <div className={styles.items_m}>
                        <ul>
                            <li><Link to="capture_goal" spy={true} smooth={true} offset={0} duration={2500} onClick={() => props.setMenuActive(false)}>{t("goal")}</Link></li>
                            <li><Link to="hard_skills" spy={true} smooth={true} offset={0} duration={2500} onClick={() => props.setMenuActive(false)}>{t("skills")}</Link></li>
                            <li><Link to="job_carusel" spy={true} smooth={true} offset={0} duration={2500} onClick={() => props.setMenuActive(false)}>{t("experience")}</Link></li>
                            <li><Link to="education_box" spy={true} smooth={true} offset={0} duration={2500} onClick={() => props.setMenuActive(false)}>{t("education")}</Link></li>
                            <li><Link to="about_me" spy={true} smooth={true} offset={0} duration={2500} onClick={() => props.setMenuActive(false)}>{t("about_me")}</Link></li>
                        </ul>
                    </div>
                    <div className={styles.language}>
                        <select id="switch_mobile_lg">
                            <option value="">{t("choose_lg")}</option>
                            <option value="en">English</option>
                            <option value="no">Norsk</option>
                            <option value="uk">Українська</option>
                            <option value="ru">Русский</option>
                        </select>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileList;