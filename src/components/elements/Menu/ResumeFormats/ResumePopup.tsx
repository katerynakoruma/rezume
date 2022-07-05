import styles from '../Menu.module.scss';
import CloseButton from '../../Contacts/CloseButton'
import Formats from './Formats';
import { useEffect } from 'react';
import {PropsPopupResume} from '../../../../Interfacies/Interfacies';
import { useTranslation } from 'react-i18next';

function ResumePopup(props: PropsPopupResume) {
    let content = document.getElementById('resume_popup_back');
    let contentInside = document.getElementById('resume_popup_content');
    let { t } = useTranslation();
    content?.addEventListener('click', function (e) {
        close(e);
    })

    function close(arg: Event) {
        if (!(arg?.target as Element).closest('#resume_popup_content')) {
            props.setResumePopupActive(false);
        }
        else {

        }
    }

    useEffect(() => {
        contentInside?.addEventListener('touchmove', function (e) {
            props.setResumePopupActive(false);
        })


    }, [props.resumePopupActive, contentInside, close])

    return (
        <div className={props.resumePopupActive ? styles.resume_popup_back_open : styles.resume_popup_back} id="resume_popup_back" >
            <div className={styles.resume_popup_body} id="resume_popup_body">
                <div className={styles.resume_popup_content} id='resume_popup_content'>
                    <div className={styles.title_popup}>
                        <p className={styles.h3}>{t("formats")}</p>
                        <CloseButton contactActive={props.resumePopupActive} setContactActive={props.setResumePopupActive} />
                    </div>
                    <Formats />
                </div>
            </div>
        </div>
    )
}
export default ResumePopup;