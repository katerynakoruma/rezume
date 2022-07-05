import { useTranslation } from 'react-i18next';
import styles from './Body.module.scss';
import CampingIcon from './icons/CampingIcon';
import CyclingIcon from './icons/CyclingIcon';
import FishingIcon from './icons/FishingIcon';
import HikingIcon from './icons/HikingIcon';
import JogginIcon from './icons/JogginIcon';

function Interests() {
    let {t} = useTranslation();
    
    return (
        <div className={styles.interest_container}>
            <div className={styles.title_iterests_box}>
                <h2>
                    {t("i_like")} . . .
                </h2>
            </div>
            <div className={styles.window_interest}>
                <div className={styles.carusel_interests}>
                    <div className={styles.interest_item_1}>
                        <JogginIcon />
                        <div className={styles.title_interest}>
                            <h3>{t("jogging")}</h3>
                        </div>
                    </div>
                    <div className={styles.interest_item_2}>
                        <CampingIcon />
                        <div className={styles.title_interest}>
                            <h3>{t("camping")}</h3>
                        </div>
                    </div>
                    <div className={styles.interest_item_3}>
                        <FishingIcon />
                        <div className={styles.title_interest}>
                            <h3>{t("fishing")}</h3>
                        </div>
                    </div>
                    <div className={styles.interest_item_4}>
                        <CyclingIcon/>
                        <div className={styles.title_interest}>
                            <h3>{t("bike")}</h3>
                        </div>
                    </div>
                    <div className={styles.interest_item_5}>
                        <HikingIcon/>
                        <div className={styles.title_interest}>
                            <h3>{t("tourism")}</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Interests;