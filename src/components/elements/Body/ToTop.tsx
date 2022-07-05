import { useEffect, useState } from 'react';
import styles from './Body.module.scss';
import ToTopIcon from './icons/ToTopIcon';
import { animateScroll as scroll } from 'react-scroll';


function ToTop() {
    let [visible, setVisible] = useState(false);
    let heightClient = document.documentElement.clientHeight;
    
    function scrollToTop() {
        scroll.scrollToTop();
    }
        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
           
        })
        
        function handleScroll() {
            if (window.scrollY > heightClient) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

        return (
            <div className={visible ? styles.box_to_top : styles.box_to_top_hidden} onClick={scrollToTop} id = "totopbutton">
                <ToTopIcon />

            </div>
        )
   
}
    export default ToTop;