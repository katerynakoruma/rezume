import EducationIcon from './icons/EducationIcon';
import styles from './Body.module.scss';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function EducationTitle(){
    let [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    let {t} = useTranslation();
    return(
        <div className={styles.university_title}>
                    <EducationIcon />
                    <div className={inView ? styles.box_h2_educ : styles.box_h2_educ_hidden} ref={ref}>
                        <h2>{t("education_title")}</h2>
                    </div>

                </div>
    )
}
export default EducationTitle;