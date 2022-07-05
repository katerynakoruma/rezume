import styles from './Menu.module.scss';
import checkWebp from '../../components_functional/checkWebp';

function Logo(){
    let isWebP = checkWebp();
    return(
        <div className={styles.logo}>
            {isWebP ? <img src="logo_kk_min_.webp" alt="logo" /> : <img src="logo_kk_min.png" alt="logo" />}
            
        </div>
    )
}
export default Logo;