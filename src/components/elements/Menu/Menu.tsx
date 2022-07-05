import styles from './Menu.module.scss';
import Logo from './Logo';
import List from './List';

function Menu() {

    return (
        <div className={styles.menu}>
            <Logo />
            <List />
        </div>
    )
}
export default Menu;