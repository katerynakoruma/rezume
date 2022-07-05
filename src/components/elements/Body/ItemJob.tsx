import styles from './Body.module.scss';
import {PropsItemJob} from '../../../Interfacies/Interfacies';

function ItemJob(props: PropsItemJob) {
    return (
        <div className={styles.item_job} id={props.id} key={props.mykey}>
            <div className={styles.title_job}>
                <h3>
                    {props.name}
                </h3>
            </div>
            <div className={styles.position}>
                <p>{props.position}</p>
            </div>
            <div className={styles.image_job}>
                <img src={props.img} alt={props.alt} title={props.title}/>

            </div>
            <div className={styles.link_job}>
                <a href={props.link}>{props.link}</a>

            </div>
            <div className={styles.job_date}>
                <p>
                    {props.date}
                </p>
            </div>
            <div className={styles.job_description}>
                <ul>
                    {props.items.map((item, i) =>
                        <li key={`item-${i}`}>{item}</li>
                    )}
                    {props.link_2.length > 0 ? <a href={props.link_2}>({props.link_2})</a> : ''}
                    
                </ul>
                
            </div>

        </div>
    )
}
export default ItemJob;