import styles from './Body.module.scss';
import OneIcon from './icons/OneIcon';
import TwoIcon from './icons/TwoIcon';
import EducationTitle from './EducationTitle';
import { useTranslation } from 'react-i18next';

function EducationBox() {
let {t} = useTranslation();
    return (
        <div className={styles.education_container} id="education_box">

            <div className={styles.university_container}>
                <EducationTitle />
                <div className={styles.title_line}></div>
                <div className={styles.university_box}>
                    <div className={styles.first_education}>
                        <div className={styles.title_first}>
                            <OneIcon />
                            <div className={styles.box_h3}>
                                <h3>{t("university_1")}</h3>
                                <p><span>{t("speciality_1_1")}</span></p>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <div className={styles.item_education}>
                                <p>{t("speciality_1_2")}</p>
                                <p>({t("date_speciality_1")})</p>

                            </div>
                            <div className={styles.item_education}>
                                <p>{t("speciality_1_3")}</p>
                                <p>({t("date_speciality_1_2")})</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.second_education}>
                        <div className={styles.title_second}>
                            <TwoIcon />
                            <div className={styles.box_h3}>
                                <h3>{t("univesity_2")}</h3>
                                <p><span>{t("speciality_2_1")}</span></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.courses_box}>
                    <div className={styles.courses_title}>
                        <h3>{t("courses")}</h3>
                    </div>
                    <div className={styles.courses_description}>
                        <div className={styles.row}>
                            <div className={styles.dot_box}>
                                <div className={styles.dot}></div>
                            </div>
                            <div className={styles.courses_item}>
                                <p>{t("cours_1")} <br/><span>({t("date_cours_1")})</span>
</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.dot_box}>
                                <div className={styles.dot}></div>
                            </div>
                            <div className={styles.courses_item}>
                                <p>{t("cours_2")}  <br/><span>({t("date_cours_2")})</span></p>

                            </div>

                        </div>
                        <div className={styles.examples}>
                            <h4>{t("examples")}</h4>
                            <p><a href="https://lucid.miledi.com.ua/" target="_blank">https://lucid.miledi.com.ua/  (desktop, mobile)</a></p>
                            <p><a href="https://author.miledi.com.ua/" target="_blank">https://author.miledi.com.ua/ (desktop, mobile)</a></p>
                            <p><a href="https://one-page-group.miledi.com.ua/" target="_blank">https://one-page-group.miledi.com.ua/  (desktop)</a></p>
                            <p><a href="https://miledi.com.ua/" target="_blank">https://miledi.com.ua/  (desktop)</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EducationBox;