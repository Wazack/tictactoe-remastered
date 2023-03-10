import './GameOver.scss'

function GameOver(props: any) {
    const displayWinner = () => {
        if (props.nameWinner === 'X') {
            return (
                <svg viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="1">
                    <path d="M14.8207 15.1401L129.265 129.585" stroke="rgb(255, 74, 74)" strokeWidth="28.9801" strokeLinecap="round"/>
                    <path d="M129.265 15.1401L14.8207 129.585" stroke="rgb(255, 74, 74)" strokeWidth="28.9801" strokeLinecap="round"/>
                    </g>
                </svg>
            )
        } else if (props.nameWinner === 'O') {
            return (
                <svg viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="1" cx="72.0428" cy="72.6345" r="57.2222" stroke="rgb(250, 250, 63)" strokeWidth="28.9801"/>
                </svg>
            )
        } else {
            return (
                <>
                    <svg viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="1">
                        <path d="M14.8207 15.1401L129.265 129.585" stroke="rgb(255, 74, 74)" strokeWidth="28.9801" strokeLinecap="round"/>
                        <path d="M129.265 15.1401L14.8207 129.585" stroke="rgb(255, 74, 74)" strokeWidth="28.9801" strokeLinecap="round"/>
                        </g>
                    </svg>
                    <svg viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="1" cx="72.0428" cy="72.6345" r="57.2222" stroke="rgb(250, 250, 63)" strokeWidth="28.9801"/>
                    </svg>
                </>
            )
        }
    }

    return (
        <div className="gameover">
            <h2>{displayWinner()} <br />{props.nameWinner === 'Tie' ? 'Tie' : 'won'}</h2>
            <button onClick={() => {props.setDifficulty(0)}}>
                <svg fill="#FFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 305.84 305.84" xmlSpace="preserve" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#000000" strokeWidth="0.0030583600000000004">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <g>
                        <path d="M152.924,300.748c84.319,0,152.912-68.6,152.912-152.918c0-39.476-15.312-77.231-42.346-105.564 c0,0,3.938-8.857,8.814-19.783c4.864-10.926-2.138-18.636-15.648-17.228l-79.125,8.289c-13.511,1.411-17.999,11.467-10.021,22.461 l46.741,64.393c7.986,10.992,17.834,12.31,22.008,2.937l7.56-16.964c12.172,18.012,18.976,39.329,18.976,61.459 c0,60.594-49.288,109.875-109.87,109.875c-60.591,0-109.882-49.287-109.882-109.875c0-19.086,4.96-37.878,14.357-54.337 c5.891-10.325,2.3-23.467-8.025-29.357c-10.328-5.896-23.464-2.3-29.36,8.031C6.923,95.107,0,121.27,0,147.829 C0,232.148,68.602,300.748,152.924,300.748z"></path> </g> </g>
                </svg>
            </button>
        </div>
    )
}

export default GameOver;