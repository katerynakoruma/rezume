import styles from '../Body.module.scss';


function FishingIcon(){
    return(
        <div  className={styles.interest_icon_box}>
            <svg display="none">
                <symbol viewBox="0 0 62 62" id="fishing_icon">
                    <g><path d="m58.586 59.111c-1.009-.521-2.153-1.111-4.333-1.111s-3.323.59-4.332 1.111c-.923.477-1.721.889-3.415.889-1.693 0-2.491-.412-3.414-.889-.748-.387-1.574-.81-2.839-1.004 2.142-2.171 3.448-5.024 3.684-8.108h.063c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2h-10.95l2.105-1.895c.83.575 1.823.896 2.845.896 2.757 0 5-2.243 5-5 0-1.524-.7-2.874-1.779-3.792 2.242-1.168 3.779-3.51 3.779-6.208 0-1.109-.267-2.167-.742-3.119 3.261-.596 5.742-3.451 5.742-6.881 0-1.284-.374-2.538-1.037-3.629 1.991-2.208 3.802-3.975 5.037-5.126v23.94c-1.161.414-2 1.514-2 2.816 0 .938.442 1.767 1.119 2.318-.76 1.223-1.119 2.961-1.119 3.681 0 1.302.839 2.402 2 2.816v3.184c0 .551-.448 1-1 1s-1-.449-1-1v-1h-2v1c0 1.654 1.346 3 3 3 .771 0 1.468-.301 2-.78.532.48 1.229.78 2 .78 1.654 0 3-1.346 3-3v-1h-2v1c0 .551-.448 1-1 1s-1-.449-1-1v-3.184c1.161-.414 2-1.514 2-2.816 0-.72-.359-2.458-1.119-3.682.677-.551 1.119-1.38 1.119-2.318 0-1.302-.839-2.402-2-2.816v-27.184h-2.236l-.211.105c-.823.412-19.963 10.19-22.31 28.302-.387.19-.751.429-1.066.742-.76.757-1.179 1.764-1.178 2.836v.396l-1.553.776c-1.305-2.606-3.406-4.645-5.943-5.869 2.933-1.245 5.071-4.004 5.437-7.29h.06c2.206 0 4-1.794 4-4 0-.951-.347-1.814-.904-2.501.553-1.093.861-2.283.89-3.499h2.014v-1.764c0-1.604-.818-3.053-2.154-3.895l-.015-.05c-1.847-6.153-7.404-10.289-13.831-10.289s-11.984 4.136-13.831 10.29l-.015.051c-1.336.842-2.154 2.291-2.154 3.895v1.764h2.065c.114 1.164.427 2.314.914 3.408-.602.7-.979 1.598-.979 2.592 0 2.206 1.794 4 4 4h.059c.329 2.962 2.1 5.494 4.595 6.876-1.592 1.004-2.654 2.774-2.654 4.791 0 1.774.847 3.468 2.267 4.533l2.4 1.8h-11.667c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h.062c.24 3.117 1.583 6.005 3.772 8.187-1.029.215-1.754.583-2.415.924-.925.477-1.724.889-3.419.889v2c2.181 0 3.325-.59 4.335-1.111.925-.477 1.724-.889 3.42-.889 1.695 0 2.494.412 3.419.889 1.01.521 2.153 1.111 4.335 1.111 2.181 0 3.324-.59 4.334-1.111.924-.477 1.721-.889 3.416-.889s2.493.412 3.417.889c1.01.521 2.153 1.111 4.334 1.111s3.324-.59 4.334-1.111c.924-.477 1.72-.889 3.415-.889s2.492.412 3.415.889c1.009.521 2.152 1.111 4.332 1.111s3.324-.59 4.333-1.111c.923-.477 1.721-.889 3.414-.889 1.694 0 2.492.412 3.415.889 1.009.521 2.152 1.111 4.332 1.111v-2c-1.693 0-2.491-.412-3.414-.889zm-14.586-13.111v2h-15.394l2.222-2zm-3-8c0 1.654-1.346 3-3 3-.589 0-1.143-.175-1.622-.486.4-.775.622-1.64.622-2.529 0-.89-.304-1.706-.799-2.372.513-.389 1.134-.613 1.799-.613 1.654 0 3 1.346 3 3zm-3-5h-.318c.766-2.947 2.121-5.865 3.759-8.617.985.933 1.559 2.223 1.559 3.617 0 2.757-2.243 5-5 5zm10-15c0 2.757-2.243 5-5 5-.041 0-.08-.005-.12-.005-.119-.115-.238-.23-.365-.338 1.582-2.427 3.338-4.688 5.041-6.681.282.632.444 1.312.444 2.024zm7 17c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0 8c-.552 0-1-.449-1-1 0-.826.571-2.436 1-2.916.429.479 1 2.09 1 2.916 0 .551-.448 1-1 1zm-5.961-31.689c-4.93 5.157-11.747 13.602-13.571 22.381-.305.18-.591.393-.855.638-.402-.179-.841-.278-1.299-.315 1.693-10.827 10.04-18.581 15.725-22.704zm-17.45 25.256c.377-.375.878-.582 1.411-.582h.011c1.097.005 1.989.903 1.989 2 0 .998-.426 1.953-1.167 2.62l-.428.386-2.405-2.405v-.601c0-.536.209-1.04.589-1.418zm-5.93 3.485-1.373.686-4.741-6.095c2.628.935 4.829 2.844 6.114 5.409zm1.341-16.052v-4c1.103 0 2 .897 2 2s-.897 2-2 2zm1.472-5.711c-.457-.182-.951-.289-1.472-.289v-2h1.986c-.025.787-.196 1.563-.514 2.289zm.145-8.289h-5.661c-.232-3.551-1.653-6.054-2.992-7.648 3.937.95 7.179 3.767 8.653 7.648zm-11.621-7.771c1.098.873 3.619 3.343 3.96 7.771h-7.914c.338-4.443 2.844-6.895 3.954-7.771zm-2.96.123c-1.339 1.594-2.76 4.097-2.992 7.648h-5.661c1.473-3.881 4.715-6.698 8.653-7.648zm-9.78 9.648h25.488c.713.433 1.172 1.17 1.245 2h-27.978c.073-.83.532-1.567 1.245-2zm2.744 4v2c-.477 0-.929.098-1.354.252-.291-.731-.488-1.488-.581-2.252zm-2 6c0-1.103.897-2 2-2v4c-1.103 0-2-.897-2-2zm4 3v-9h16v9c0 3.86-3.141 7-7 7h-2c-3.859 0-7-3.14-7-7zm2 12.667c0-2.022 1.645-3.667 3.718-3.667 1.123 0 2.205.529 2.895 1.416l5.27 6.776-.83 2.492 1.896.633.869-2.607 4.985-2.492 2.113 2.113-4.993 4.494c-1.573 1.416-4.117 1.531-5.813.26l-8.643-6.485c-.919-.689-1.467-1.785-1.467-2.933zm-9 8.333h14.333l2.666 2h-16.999zm32.426 13.111c-.924.477-1.722.889-3.416.889s-2.492-.412-3.416-.889c-1.01-.521-2.155-1.111-4.335-1.111s-3.324.59-4.334 1.111c-.924.477-1.722.889-3.416.889-1.695 0-2.494-.412-3.419-.889-.839-.433-1.78-.909-3.322-1.059-2.708-1.867-4.411-4.811-4.706-8.052h37.875c-.298 3.295-2.046 6.273-4.826 8.137-1.176.203-1.968.604-2.685.974z"/><path d="m22 28c0-2.206-1.794-4-4-4h-2c-2.206 0-4 1.794-4 4 0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2zm-1.999 0h-2.001v-2c1.103 0 2 .897 2.001 2zm-4.001-2v2h-2c0-1.103.897-2 2-2z"/><path d="m13 20c.552 0 1 .449 1 1h2c0-1.654-1.346-3-3-3s-3 1.346-3 3h2c0-.551.448-1 1-1z"/><path d="m21 20c.552 0 1 .449 1 1h2c0-1.654-1.346-3-3-3s-3 1.346-3 3h2c0-.551.448-1 1-1z"/><circle cx="17" cy="7" r="1"/></g>

                </symbol>
            </svg>
            <svg className={styles.fishingicon}>
                <use href="#fishing_icon"></use>
            </svg>
        </div>
    )
}
export default FishingIcon;