import styles from './Body.module.scss';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import ItemHardSkills from '../../information/ItemHardSkills';
import checkWebp from '../../components_functional/checkWebp';

function SkillsBox() {
    let { t } = useTranslation();
    let items = ItemHardSkills();
    let [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    let isWebP = checkWebp();
    function showMore(arg: string){
        
       let div: HTMLElement | null = document.getElementById(`more-${arg}`);
       if( div !== null){
        if(div.style.display === 'block'){

            div.style.display = 'none';
        }else {
            div.style.display = 'block'
        }
        
       }
      
    }

    return (
        <div className={isWebP ? styles.skill_box_webp : styles.skill_box} id="hard_skills">
            <div className={styles.body_container}>
                <div className={inView ? styles.title_skill : styles.title_skill_hidden} ref={ref}>
                    <h2>{t("high_scills_title")}</h2>
                    <div className={styles.box_line}>

                    </div>
                </div>
                <div className={styles.body_skills}>

                    <div className={inView ? styles.skills_text : styles.skills_text_hidden} ref={ref}>
                        <ul>
                            {items.map((item, index) => (
                                <div key={`item_skill-${index}`}>
                                    <div className={styles.skill_div} id = {`skill-${index}`}  onClick={() => showMore(index.toString())} title={t("more")}>{item.skill}</div>
                                    <div className={styles.more} id = {`more-${index}`}><p>{item.explane}</p></div>
                                </div>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillsBox;