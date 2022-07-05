import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.scss';

function Map() {
    let { t } = useTranslation();
    function checkWebp() {

        try {
            return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
        } catch (err) {
            return false;
        }
    }
    let isWebP = checkWebp();
    
    return (
        <div className={styles.map}>
            {isWebP ? <img src="./google_map_.webp" alt="" /> : <img src="./google_map.png" alt="" />}
            <a href="https://goo.gl/maps/Seiyi9CAKb11At2YA" className={styles.button_more} target="_blank">{t("open_map")}</a>
        </div>
    )
}
export default Map;