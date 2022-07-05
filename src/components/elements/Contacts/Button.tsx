import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.scss';
function Button() {
    let {t} = useTranslation();
    return (
        <div className={styles.button}>
           <a href="mailto:mail@katerynakoruma.com"><p>{t("write")}</p></a> 
        </div>
    )
}
export default Button;