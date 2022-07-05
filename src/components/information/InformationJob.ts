import { useTranslation } from "react-i18next"

function InformationJob() {
    let { t } = useTranslation();
    let info = [
        {
            "id": "item_job_1",
            "name": t("title_job_1"),
            "position": t("position_job_1"),
            "img": {
                "webp": "./artjoker_.webp",
                "png": "./artjoker.jpg",
            },
            "link": "https:// artjoker.ua/",
            "date": t("date_job_1"),
            "items": [t("description_job_1_1"), t("description_job_1_2"), t("description_job_1_3"), t("description_job_1_4")],
            "alt": t("alt_1"),
            "title": t("title_1"),
            "link_2": "https://github.com/Kate2120/individual_work"
        },
        {
            "id": "item_job_2",
            "name": t("title_job_2"),
            "position": t("position_job_2"),
            "img": {
                "webp": "./imaris_.webp",
                "png": "./imaris.jpg",
            },
            "link": "https://imaris.ua/",
            "date": t("date_job_2"),
            "items": [t("description_job_2_1"), t("description_job_2_2"), t("description_job_2_3")],
            "alt": t("alt_2"),
            "title": t("title_2"),
            "link_2": ""
        },
        {
            "id": "item_job_3",
            "name": t("title_job_3"),
            "position": t("position_job_3"),
            "img": {
                "webp": "./kidsboutique_.webp",
                "png": "./kidsboutique.png",
            },
            "link": "https://kidsboutique.com.ua/",
            "date": t("date_job_3"),
            "items": [t("description_job_3_1"), t("description_job_3_2")],
            "alt": t("alt_3"),
            "title": t("title_3"),
            "link_2": ""
        },
        {
            "id": "item_job_4",
            "name": t("title_job_4"),
            "position": t("position_job_4"),
            "img": {
                "webp": "./cakes_.webp",
                "png": "./cakes.png",
            },
            "link": "https://cakes.ru/",
            "date": t("date_job_4"),
            "items": [t("description_job_4_1"), t("description_job_4_2")],
            "alt": t("alt_4"),
            "title": t("title_4"),
            "link_2": ""
        },
        {
            "id": "item_job_5",
            "name": t("title_job_5"),
            "position": t("position_job_5"),
            "img": {
                "webp": "./hospital_.webp",
                "png": "./hospital_.jpg",
            },
            "link": "",
            "date": t("date_job_5"),
            "items": [t("description_job_5_1"), t("description_job_5_2"), t("description_job_5_3")],
            "alt": t("alt_5"),
            "title": t("title_5"),
            "link_2": ""
        },
        {
            "id": "item_job_6",
            "name": t("title_job_6"),
            "position": t("position_job_6"),
            "img": {
                "webp": "./logo_do3let_.webp",
                "png": "./logo_do3let.png",
            },
            "link": "https://do3let.com.ua/",
            "date": t("date_job_6"),
            "items": [t("description_job_6_1"), t("description_job_6_2"), t("description_job_6_3"), t("description_job_6_4")],
            "alt": t("alt_6"),
            "title": t("title_6"),
            "link_2": ""
        },

    ];
    
    return info;
}
export default InformationJob;