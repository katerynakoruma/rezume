import styles from '../Body.module.scss';
import { useInView } from 'react-intersection-observer';

function TwoIcon() {
    let [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <div className={inView ? styles.digiticon_box_two : styles.digiticon_box_two_hidden} ref={ref}>
            <svg display="none">
                <symbol viewBox="0 0 512 512" id="two_icon">
                    <linearGradient id="Blue_2" gradientUnits="userSpaceOnUse" x1="6" x2="506" y1="256" y2="256"><stop offset="0"  /><stop offset=".5"  /><stop offset="1"  /></linearGradient><linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse" x1="158.062" x2="419.969" y1="183.655" y2="445.562"><stop offset="0" /><stop offset="1"  /></linearGradient><circle cx="256" cy="256" fill="#0a9995" r="250" /><path d="m495.9 326.508-171.935-171.935c-15.835-16.621-39.965-26.444-69.033-26.444-54.6 0-87.65 33.33-87.65 83.753v4.618l67.052 67.052c-16.687 20.722-39.631 48.06-71.072 85.143v15.18l120.577 120.574c101.183-11.213 184.144-82.8 212.061-177.941z" fill="#067c78" opacity=".49" /><path d="m348.738 324.726v59.145h-185.476v-15.18c100.338-118.344 114.158-137.469 114.158-158.879 0-13.522-8.909-22.59-21.682-22.59-14 0-22.535 9.442-22.535 24.454v4.82h-65.921v-4.614c0-50.423 33.049-83.753 87.65-83.753 52.9 0 89.423 32.524 89.423 79.343 0 31.381-11.61 55.471-64.947 117.254z" fill="#fff" />

                </symbol>
            </svg>
            <svg className={styles.digiticon}>
                <use href="#two_icon"></use>
            </svg>
        </div>
    )
}
export default TwoIcon;