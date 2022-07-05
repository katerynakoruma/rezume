import styles from './Header.module.scss';
import PhotoHeader from './PhotoHeader';
import TextHeader from './TextHeader';

function HeaderInfo() {

    return (
        <div className={styles.rows}>
            <div className={styles.row_header}>
                <TextHeader />
            </div>
            <div className={styles.row_header_2}>
                <PhotoHeader />
            </div>
        </div>
    )
}
export default HeaderInfo;