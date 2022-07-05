import styles from '../Menu.module.scss';

function WordIcon() {
    return (
        <div>
            <svg display="none">
                <symbol viewBox="0 0 512 512" id="word_icon">
                    <circle fill="#05CDFF" cx="256" cy="256" r="256" />
                    <path fill="#0485BD" d="M511.476,239.81l-99.979-99.979h-92.973l-32.542-32.542l-185.479,32.542v232.337L239.81,511.476
	C245.165,511.81,250.56,512,256,512c141.385,0,256-114.615,256-256C512,250.56,511.81,245.166,511.476,239.81z"/>
                    <g>
                        <polygon fill="#1E2D64" points="100.503,372.169 285.982,404.711 285.982,107.29 100.503,139.831 	" />
                        <rect x="295.01" y="139.83" fill="#1E2D64" width="116.49" height="232.34" />
                    </g>
                    <g>
                        <polygon fill="#FFFFFF" points="216.823,271.524 202.563,214.428 185.773,214.428 170.134,272.804 157.858,214.193 
		140.429,214.193 165.273,297.807 178.934,297.807 193.42,238.406 207.905,297.807 221.566,297.807 249.204,214.193 
		231.539,214.193 	"/>
                        <rect x="295.01" y="166.45" fill="#FFFFFF" width="100.57" height="22.601" />
                        <rect x="295.01" y="205.57" fill="#FFFFFF" width="100.57" height="22.601" />
                        <rect x="295.01" y="244.7" fill="#FFFFFF" width="100.57" height="22.601" />
                        <rect x="295.01" y="283.82" fill="#FFFFFF" width="100.57" height="22.601" />
                        <rect x="295.01" y="322.95" fill="#FFFFFF" width="100.57" height="22.601" />
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
                    <g>
                    </g>

                </symbol>
            </svg>
            <svg className={styles.doc_icon}>
                <use href="#word_icon"></use>

            </svg>
        </div>
    )
}
export default WordIcon;