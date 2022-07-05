import styles from '../Menu.module.scss';

function GoogleDocIcon() {
    return (
        <div>
            <svg display="none">
                <symbol viewBox="0 0 512 512" id="google_doc_icon">
                <circle fill="#273B7A" cx="256" cy="256" r="256"/>
                    <path fill="#121149" d="M275.787,511.245c110.132-8.418,200.761-86.526,227.895-190.311L361.625,178.878l-134.416,96.599
	l45.47,45.47l-116.533,70.658L275.787,511.245z"/>
                    <path fill="#008AFE" d="M296.439,113.693H171.613c-11.729,0-21.237,9.509-21.237,21.237v242.14
	c0,11.729,9.509,21.237,21.237,21.237h168.774c11.729,0,21.237-9.509,21.237-21.237V178.878L296.439,113.693z"/>
                    <g>
                        <rect x="184.785" y="237.416" fill="#FFFFFF" width="141.234" height="10.261" />
                        <rect x="184.785" y="262.775" fill="#FFFFFF" width="141.234" height="10.261" />
                        <rect x="184.785" y="291.306" fill="#FFFFFF" width="141.234" height="10.261" />
                        <rect x="184.785" y="317.871" fill="#FFFFFF" width="73.635" height="10.261" />
                    </g>
                    <path fill="#55C2F9" d="M317.676,178.878h43.948l-65.184-65.184v43.948C296.439,169.37,305.947,178.878,317.676,178.878z" />
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>

                </symbol>
            </svg>
            <svg className={styles.doc_icon}>
                <use href="#google_doc_icon"></use>

            </svg>
            
        </div>
    )
}
export default GoogleDocIcon;