import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styles from './Body.module.scss';
import GoalIcon from './icons/GoalIcon';

function Goal() {
    let {t} = useTranslation();
    let [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <div className={styles.container_goal} id="capture_goal">
            <div className={styles.box_goal_text} >
                <div className={inView ? styles.box_h2 : styles.box_h2_hidden} ref={ref}>
                    <h2>{t("goal_title")}</h2>
                </div>
                <div className={inView ? styles.box_line : styles.box_line_hidden} ref={ref}>
                </div>
                <div className={inView ? styles.text : styles.text_hidden} ref={ref}>
                    <p>{t("goal_text")}</p>
                </div>
            </div>

            <div className={inView ? styles.box_image : styles.box_image_hidden} ref={ref}>
                <GoalIcon />
            </div>
         </div>
    )
}
export default Goal;