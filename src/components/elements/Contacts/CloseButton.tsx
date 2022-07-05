import {PropsPopup} from '../../../Interfacies/Interfacies';
import styles from './Contacts.module.scss';

function CloseButton(props: PropsPopup) {
    
    return (
        <div>
            <svg display="none">       
                <symbol viewBox="0 0 329.26933 329" id="close_button">
                <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
                </symbol>
            </svg>
            <svg className={styles.close_popup} onClick={() => props.setContactActive(!props.contactActive)} id='closed_button'>
                <use href="#close_button"></use>
            </svg>
            
        </div>
    )
}
export default CloseButton;