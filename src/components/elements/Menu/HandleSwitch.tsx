import {changeLanguage} from "i18next";

function HandleSwitch(event: React.MouseEvent<HTMLElement>){
    changeLanguage(`${(event.target as HTMLElement).id}`);

}
export default HandleSwitch;