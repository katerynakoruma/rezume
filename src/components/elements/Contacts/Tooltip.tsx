import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.scss';

function Tooltip() {
    let { t } = useTranslation();

    return (
        <div>
            <div className={styles.tooltip} id='ppp'>
                {t("copied")}
            </div>
        </div>
    )
}
export default Tooltip;