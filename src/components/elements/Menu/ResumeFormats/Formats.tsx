import i18next from 'i18next';
import styles from '../Menu.module.scss';
import GoogleDocIcon from '../icons/GoogleDocIcon';
import PdfIcon from '../icons/PdfIcon';
import WordIcon from '../icons/WodrIcon';

function Formats() {
    return (
        <div className={styles.container_mes}>
            <div className={styles.row_messenger}>

                <a href={i18next.language === "ru" ? "https://docs.google.com/document/d/1J2X3Pfo4PsIJsUeWzsqNK0mADJQdTHLh-SnllQE9nd8/edit?usp=sharing" : i18next.language === "en" ? "https://docs.google.com/document/d/1iJxoBZxiEaQId_vG6XPVafM2MwfUJz2G-HuFMd6gaaM/edit?usp=sharing" : i18next.language === "uk" ? "https://docs.google.com/document/d/1PPOIjb-C_VEbdJiYlyhH26yqDsLkpDiMLYZEMOYH_do/edit?usp=sharing" : "https://docs.google.com/document/d/1Teira6ed9zWd2qUDNoYmj4_oAgpsdQfsP_NIisHkzDE/edit?usp=sharing"} target='_blank'>
                    <div className={styles.icon}>
                        <GoogleDocIcon />
                        <div className={styles.sign_doc}>Google Docs</div>
                    </div>

                </a>

                    <a href={i18next.language === "en" ? "Koruma_Kateryna-resume_en.docx" : i18next.language === "ru" ? "Koruma_Kateryna-resume_ru.docx" : i18next.language === "uk" ? "Koruma_Kateryna-resume_uk.docx" : "Koruma_Kateryna-resume_no.docx"} download>
                        <div className={styles.icon}>
                            <WordIcon />
                            <div className={styles.sign_doc}>Word.docs</div>
                        </div>

                    </a> 
                
                <a href={i18next.language === "en" ? "Koruma_Kateryna-resume_en.pdf" : i18next.language === "ru" ? "Koruma_Kateryna-resume_ru.pdf" : i18next.language === "uk" ? "public/Koruma_Kateryna-resume_uk.pdf" : "Koruma_Kateryna-resume_no.pdf"} download>
                    <div className={styles.icon}>
                        <PdfIcon />
                        <div className={styles.sign_doc}>Pdf</div>
                    </div>

                </a> 
                


            </div>

        </div>
    )
}
export default Formats;