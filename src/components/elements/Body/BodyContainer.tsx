import Futer from '../Futer/Futer';
import styles from './Body.module.scss'
import CaruselJob from './CaruselJob';
import EducationBox from './EducationBox';
import Goal from './Goal';
import Interests from './Interests';
import SkillsBox from './SkillsBox';
import SoftSkills from './SoftSkills';
import ToTop from './ToTop';

function BodyContainer() {

    return (
        <div>
            <div className={styles.body_container}>
                <Goal />
            </div>
            <SkillsBox />
            <CaruselJob />
            <EducationBox />
            <SoftSkills />
            <Interests />
            <Futer />
            <ToTop />
        </div>


    )
}
export default BodyContainer;