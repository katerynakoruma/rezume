import styles from '../Body.module.scss';

function ToTopIcon() {
    return (
        <div className={styles.totopicon_box}>
            <svg display="none">
                <symbol viewBox="0 0 24 24" id="to_top">
                    <path id="path2" d="m12 9.414-6.293 6.293c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414l7-7c.39-.391 1.024-.391 1.414 0l7 7c.39.39.39 1.024 0 1.414s-1.024.39-1.414 0z" />

                </symbol>
            </svg>
            <svg className={styles.totopicon}>
                <use href="#to_top"></use>
            </svg>
        </div>
    )
}
export default ToTopIcon;