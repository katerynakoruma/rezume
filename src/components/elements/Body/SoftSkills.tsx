import { useTranslation } from 'react-i18next';
import styles from './Body.module.scss';
import SoftSkillsIcon from './icons/SoftSkillsIcon';

function SoftSkills() {
    let {t} = useTranslation();
    
    return (
        <div className={styles.soft_skills_container} id="about_me">
            <div className={styles.soft_skills_title}>
                <h2>{t("soft_skills_title")}</h2>
            </div>
            <div className={styles.soft_skills_box}>
                <div className={styles.item_1}><p>{t("perseverance")}</p></div>
                <div className={styles.item_2}><p>{t("teamwork")}</p></div>
                <div className={styles.item_3}><p>{t("self-learn")}</p></div>
                <div className={styles.item_4}><p>{t("scrupulousness")}</p></div>
                <div className={styles.item_5}><SoftSkillsIcon /></div>
                <div className={styles.item_6}><p>{t("responsibility")}</p></div>
                <div className={styles.item_7}><p>{t("persistency")}</p></div>
                <div className={styles.item_8}><p>{t("mentor")}</p></div>
                <div className={styles.item_9}><p>{t("analytic")}</p></div>
            </div>


        </div>
    )
}
export default SoftSkills;