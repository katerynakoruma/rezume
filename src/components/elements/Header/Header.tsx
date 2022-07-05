import styles from './Header.module.scss';
import Menu from '../Menu/Menu';
import HeaderInfo from './HeaderInfo';
import checkWebp from '../../components_functional/checkWebp';

export function Header() {
     let isWebP = checkWebp (); 

    return (
        <div className={isWebP ? styles.header_web : styles.header}>
            <div className={isWebP ? styles.light_web : styles.light}>
                <div className={styles.container}>
                    <Menu />
                    <HeaderInfo />
                </div>
            </div>
        </div>
    )
}