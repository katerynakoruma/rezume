export interface PropsDotItem{
    page: number,
    item: number,
    setPage: Function
}

export interface PropsItemJob {
    mykey: string,
    id: string,
    name: string,
    position: string,
    img: string,
    link: string,
    date: string,
    items: string[],
    alt: string,
    title: string,
    link_2: string
}

export interface PropsPopup{
    contactActive: boolean;
    setContactActive: Function
}

export interface PropsPopupContact {
    contactActive: boolean;
    setContactActive: Function
}

export interface PropsPopupMenu {
    menuActive: boolean;
    setMenuActive: Function
}

export interface PropsPopupResume {
    resumePopupActive: boolean;
    setResumePopupActive: Function
}
