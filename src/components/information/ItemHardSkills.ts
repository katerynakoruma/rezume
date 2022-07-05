import { useTranslation } from "react-i18next"

function ItemHardSkills() {
    let { t } = useTranslation();
    let item = [{
        "skill": t("high_scills_text_1"),
        "explane": t("explane_1")
    },{
        "skill": "Javascript",
        "explane": t("explane_js")
    },
    {
        "skill": "Typescript",
        "explane": t("explane_ts")
    },
    {
        "skill": "React library",
        "explane": t("explane_react")
    },
    {
        "skill": t("high_scills_text_2"),
        "explane": t("explane_2")
    },
    {
        "skill": t("high_scills_text_3"),
        "explane": t("explane_3") 
    },
    {
        "skill": t("high_scills_text_4"),
        "explane": t("explane_4")
    } ,
    {
        "skill": "English B1",
        "explane": t("explane_language")  
    },
    {
        "skill": "SEO",
        "explane": t("explane_SEO") 
    }]
    return item;
}
export default ItemHardSkills;