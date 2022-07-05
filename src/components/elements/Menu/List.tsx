import styles from './Menu.module.scss';
import Burger from './Burger';
import { useEffect, useState } from 'react';
import ResumePopup from './ResumeFormats/ResumePopup';
import ResumeIcon from './icons/ResumeIcon';
import MobileList from './MobileList';
import { useTranslation } from "react-i18next";
import SwitchLaguage from './SwitchLanguage';
import { Link, animateScroll as scroll } from "react-scroll";

function List() {
    let [resumeActive, setResumeActive] = useState(false);
    let [menuActive, setMenuActive] = useState(false);
    let body = document.querySelector('body') as HTMLElement;
    let { t } = useTranslation();

    function BodyUnlock() {
        if (body !== undefined) {
            body.style.position = 'static';
            body.style.padding = '0';

        }
    }
    useEffect(() => {
        if (resumeActive || menuActive) {
            if (body !== undefined) {
                body.style.position = 'fixed';
                body.style.padding = '0 15px 0 0';
            }
            else {

            }
        }
        else {
            setTimeout(BodyUnlock, 1000);
        }
    }, [resumeActive, menuActive]);

    return (
        <div className={styles.menu_container}>
            <div className={styles.items}>
                <div className={styles.navbar}>
                    <div className={styles.nav_item}><Link to="capture_goal" spy={true} smooth={true} offset={0} duration={2000} onClick={() => setMenuActive(false)}>{t("goal")}</Link></div>
                    <div className={styles.nav_item}><Link to="hard_skills" spy={true} smooth={true} offset={0} duration={2000} onClick={() => setMenuActive(false)}>{t("skills")}</Link></div>
                    <div className={styles.nav_item}><Link to="job_carusel" spy={true} smooth={true} offset={0} duration={2000} onClick={() => setMenuActive(false)}>{t("experience")}</Link></div>
                    <div className={styles.nav_item}><Link to="education_box" spy={true} smooth={true} offset={0} duration={2000} onClick={() => setMenuActive(false)}>{t("education")}</Link></div>
                    <div className={styles.nav_item}><Link to="about_me" spy={true} smooth={true} offset={0} duration={2000} onClick={() => setMenuActive(false)}>{t("about_me")}</Link></div>
                    <div className={styles.nav_item}><SwitchLaguage /></div>
                    <div className={styles.nav_item_resume}>
                        <div onClick={() => setResumeActive(true)} className={styles.div_icon_resume}>
                            <ResumeIcon />
                        </div>
                    </div>
                    <div onClick={() => setMenuActive(!menuActive)} className={styles.div_icon_burger}>
                        <Burger />
                    </div>
                </div>

            </div>
            <ResumePopup resumePopupActive={resumeActive} setResumePopupActive={setResumeActive} />
            <MobileList menuActive={menuActive} setMenuActive={setMenuActive} />
        </div>
    )
}
export default List;