import styles from './Header.module.scss';
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function TextHeader() {
    let {t} = useTranslation();

    return (
        <div className={styles.header_text}>
            <div className={styles.h1_style}>
                <h1>{t("name")} <span>{t("k")}</span>{t("surname")}</h1>
                <p  className={styles.stilling }>{t("junior")}</p>
                <p className={styles.quote}>{t("sentence_1")} <br/>{t("sentence_2")}</p>
            </div>

        </div>
    )
}
export default TextHeader;