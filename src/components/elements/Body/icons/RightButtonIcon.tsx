import styles from '../Body.module.scss';

function RightButtonIcon() {
    return (
        <div>
            <svg display="none">
                <symbol viewBox="0 0 443.52 443.52" id="right_icon">
                    <g>
                        <g>
                            <path d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734
			L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8
			C342.889,227.058,342.889,216.255,336.226,209.591z"/>
                        </g>
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
            <svg className={styles.pageicon}>
                <use href="#right_icon"></use>
            </svg>
        </div>
    )
}
export default RightButtonIcon;