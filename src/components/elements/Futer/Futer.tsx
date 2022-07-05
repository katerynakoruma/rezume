import { useTranslation } from 'react-i18next';
import Logo from '../Menu/Logo';
import styles from './futer.module.scss';

function Futer() {
    let {t} = useTranslation();
    return (
        <div className={styles.futer_container}>
            <div className={styles.futer_box}>
                <Logo/>
                <p>{t("my_work")}</p>
            </div>
        </div>
    )
}
export default Futer;