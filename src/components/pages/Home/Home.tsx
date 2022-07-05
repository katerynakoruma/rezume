import BodyContainer from "../../elements/Body/BodyContainer";
import Contacts from "../../elements/Contacts/Contacts";
import { Header } from "../../elements/Header/Header";

function Home(){
    return (
        <div>
            <Header />
            <Contacts/>
            <BodyContainer/>
        </div>
    )
}
export default Home;