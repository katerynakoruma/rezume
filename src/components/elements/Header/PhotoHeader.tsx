import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import checkSizeWebp from '../../components_functional/checkSizeWebp';

function PhotoHeader() {
    let { t } = useTranslation();
    let sizeWebp = checkSizeWebp();

    return (
        <div className={styles.photo}>
            <div className={styles.circle}>
                <div className={styles.image}>
                    {sizeWebp === "largeWebp" ?
                        <img src="koruma_kateryna_.webp" alt={t("alt_name")} title={t("title_name")} /> :
                        sizeWebp === "mediumWebp" ?
                            <img src="koruma_kateryna_medium_.webp" alt={t("alt_name")} title={t("title_name")} /> :
                            sizeWebp === "smallWebp" ?
                                <img src="koruma_kateryna_small_.webp" alt={t("alt_name")} title={t("title_name")} /> :
                                sizeWebp === "largePng" ?
                                    <img src="koruma_kateryna.jpg" alt={t("alt_name")} title={t("title_name")} /> :
                                    sizeWebp === "mediumPng" ?
                                        <img src="koruma_kateryna_medium.jpg" alt={t("alt_name")} title={t("title_name")} /> :
                                        <img src="koruma_kateryna_small.jpg" alt={t("alt_name")} title={t("title_name")} />
                    }
                </div>
            </div>
        </div>
    )
}
export default PhotoHeader;

