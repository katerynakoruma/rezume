import { useEffect, useState } from 'react';
import styles from './Body.module.scss';
import LeftButtonIcon from './icons/LeftButtonIcon';
import RightButtonIcon from './icons/RightButtonIcon';
import DotItem from './DotItem';
import { useTranslation } from 'react-i18next';
import InformationJob from '../../information/InformationJob';
import ItemJob from './ItemJob';
import checkWebp from '../../components_functional/checkWebp';

let dotS = 0;
let dotE = 0;

function CaruselJob() {
    let jobs = InformationJob();
    let [dotsAmount, setDotsAmount] = useState(3);
    let [page, setPage] = useState(1);
    let width = window.innerWidth;
    let { t } = useTranslation();
    let isWebP = checkWebp();
    let style = '';
    let div_1: HTMLElement | null;
    let div_2: HTMLElement | null;
    let div_3: HTMLElement | null;
    let div_4: HTMLElement | null;
    let div_5: HTMLElement | null;
    let div_6: HTMLElement | null;

    function rrr(arg: number) {

        dotS = arg;
        return dotS;
    }

    function sss(arg: number) {
        dotE = arg;
        return dotE;
    }

    useEffect(() => {

        if (width < 761) {
            setDotsAmount(6);

        }
        else {
            setDotsAmount(3);
        }

        div_1 = document.getElementById('item_job_1');
        div_2 = document.getElementById('item_job_2');
        div_3 = document.getElementById('item_job_3');
        div_4 = document.getElementById('item_job_4');
        div_5 = document.getElementById('item_job_5');
        div_6 = document.getElementById('item_job_6');


        div_1?.addEventListener('touchstart', function (event) {
            let uuu = event.changedTouches[0].clientX;
            rrr(uuu);

        }, { passive: true })
        div_2?.addEventListener('touchstart', function (event) {
            let uuu = event.changedTouches[0].clientX;
            rrr(uuu);

        }, { passive: true })
        div_3?.addEventListener('touchstart', function (event) {
            let uuu = event.changedTouches[0].clientX;
            rrr(uuu);

        }, { passive: true })
        div_4?.addEventListener('touchstart', function (event) {
            let uuu = event.changedTouches[0].clientX;
            rrr(uuu);

        }, { passive: true })
        div_5?.addEventListener('touchstart', function (event) {
            let uuu = event.changedTouches[0].clientX;
            rrr(uuu);

        }, { passive: true })


        div_1?.addEventListener('touchend', function (event) {
            let vvv = event.changedTouches[0].clientX;
            sss(vvv);
            let direction = takeDirection();

            if (direction < 0) {

                prevPage();
            }
            else if (direction > 0) {
                nextPage();
            }
            else {
                return;
            }

        }, { passive: true })

        div_2?.addEventListener('touchend', function (event) {
            let vvv = event.changedTouches[0].clientX;
            sss(vvv);
            let direction = takeDirection();
            console.log(direction);

            if (direction < 0) {

                prevPage();
            }
            else if (direction > 0) {
                nextPage();
            }
            else {
                return;
            }

        }, { passive: true })

        div_3?.addEventListener('touchend', function (event) {
            let vvv = event.changedTouches[0].clientX;
            sss(vvv);
            let direction = takeDirection();

            if (direction < 0) {

                prevPage();
            }
            else if (direction > 0) {
                nextPage();
            }
            else {
                return;
            }

        }, { passive: true })

        div_4?.addEventListener('touchend', function (event) {
            let vvv = event.changedTouches[0].clientX;
            sss(vvv);
            let direction = takeDirection();
            if (direction < 0) {

                prevPage();
            }
            else if (direction > 0) {
                nextPage();
            }
            else {
                return;
            }

        }, { passive: true })

        div_5?.addEventListener('touchend', function (event) {
            let vvv = event.changedTouches[0].clientX;
            sss(vvv);
            let direction = takeDirection();

            if (direction < 0) {

                prevPage();
            }
            else if (direction > 0) {
                nextPage();
            }
            else {
                return;
            }

        }, { passive: true })
        div_6?.addEventListener('touchend', function (event) {
            let vvv = event.changedTouches[0].clientX;
            sss(vvv);
            let direction = takeDirection();

            if (direction < 0) {

                prevPage();
            }
            else if (direction > 0) {
                nextPage();
            }
            else {
                return;
            }

        }, { passive: true })

    }, [page, width, dotsAmount]);

    function takeDirection() {
        let res = dotS - dotE;
        dotS = dotE;
        dotE = 0;
        return res;
    }
    function nextPage() {
        if (page < dotsAmount) {
            setPage(current => current + 1);
            return page;
        }
        else {
            return page;
        }
    }
    function prevPage() {

        if (page >= 1) {
            setPage(activePage => activePage - 1);
            return page;
        }
        else {
            return page;
        }
    }

    if (page < 1) {
        setPage(1);
    }
    else if (page > 6) {
        setPage(6);
    }


    switch (page) {
        case 1: style = '';
            break;
        case 2: style = styles.page_2;
            break;
        case 3: style = styles.page_3;
            break;
        case 4: style = styles.page_4;
            break;
        case 5: style = styles.page_5;
            break;
        case 6: style = styles.page_6;
            break;
    }

    return (
        <div className={isWebP ? styles.carusel_body_webp : styles.carusel_body} id="job_carusel">
            <div className={styles.carusel_container}>
                <div className={styles.title_carusel}>
                    <h2>{t("experience_title")}</h2>
                </div>
                <div className={styles.box_window}>
                    <div className={styles.box_pageicon} onClick={() => { if (page > 1) { setPage(currentPage => currentPage - 1) } else { return } }}><LeftButtonIcon /></div>
                    <div className={styles.carusel_window}>

                        <div className={page === 1 ? styles.box_job_text : `${styles.box_job_text} ${style}`}>
                            {jobs.map((item, index) => (
                                <ItemJob
                                    mykey={`${item.id}-${index}`}
                                    id={item.id}
                                    name={item.name}
                                    position={item.position}
                                    img={isWebP ? item.img.webp : item.img.png}
                                    link={item.link}
                                    date={item.date}
                                    items={item.items}
                                    alt={item.alt}
                                    title={item.title}
                                    link_2={item.link_2}
                                />
                            ))}

                        </div>
                        <div>

                        </div>

                    </div>
                    <div className={styles.box_pageicon} onClick={() => { if (page < dotsAmount) { setPage(currentPage => currentPage + 1) } else { return } }}><RightButtonIcon /></div>
                </div>



                {dotsAmount === 3 ? (
                    <div className={styles.dots_page}>
                        <DotItem page={page} item={1} setPage={setPage} />
                        <DotItem page={page} item={2} setPage={setPage} />
                        <DotItem page={page} item={3} setPage={setPage} />
                    </div>
                )

                    : (
                        <div className={styles.dots_page}>
                            <DotItem page={page} item={1} setPage={setPage} />
                            <DotItem page={page} item={2} setPage={setPage} />
                            <DotItem page={page} item={3} setPage={setPage} />
                            <DotItem page={page} item={4} setPage={setPage} />
                            <DotItem page={page} item={5} setPage={setPage} />
                            <DotItem page={page} item={6} setPage={setPage} />
                        </div>)
                }



            </div>

        </div>
    )
}



export default CaruselJob;