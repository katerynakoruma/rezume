import styles from '../Body.module.scss';
import { useInView } from 'react-intersection-observer';

function OneIcon() {
    let [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <div className={inView ? styles.digiticon_box : styles.digiticon_box_hidden} ref={ref}>
            <svg display="none">
                <symbol viewBox="0 0 512 512" id="one_icon">
                <linearGradient id="Blue_2" gradientUnits="userSpaceOnUse" x1="6" x2="506" y1="256" y2="256"><stop offset="0" fill="#0a9995"/><stop offset=".5" /><stop offset="1" /></linearGradient><linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse" x1="176.86" x2="442.01" y1="158.376" y2="423.526"><stop offset="0"/><stop offset="1" /></linearGradient><circle cx="256" cy="256" fill="#0a9995" r="250"/><path d="m497.515 320.751-189.44-189.44h-104.15v56.514l36.968 36.968v155.9l107.624 107.62a250.566 250.566 0 0 0 148.998-167.562z" fill="#067c78" opacity=".49"/><path d="m308.075 131.311v249.378h-67.182v-192.865h-36.968v-56.513z" fill="#fff"/>

                </symbol>
            </svg>
            <svg className={styles.digiticon}>
                <use href="#one_icon"></use>
            </svg>
        </div>
    )
}
export default OneIcon;