import styles from './Body.module.scss';
import {PropsDotItem} from '../../../Interfacies/Interfacies'

function DotItem(props: PropsDotItem){
    return(
        <div className={props.item === props.page ? styles.dot_active : styles.dot} id={props.item.toString()} onClick = {() => props.setPage(props.item)}>

        </div>
    )
}
export default DotItem;