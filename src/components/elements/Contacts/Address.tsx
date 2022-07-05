import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.scss';
import Email from './Email';
import Location from './Location';
function Adress() {
    let {t} = useTranslation();
    return (
        <div className={styles.adress}>
            <div className={styles.title}>
                <Location />
                <h3>{t("address_title")}</h3>
            </div>
            <p>
                {t("address")}
            </p>
            <Email/>
        </div>
    )
}
export default Adress;