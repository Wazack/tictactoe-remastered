import { useEffect, useRef, useState } from "react";
import './TypeWord.scss'

function TypeWord(props: any) {

    const [index, setIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [isGoodWord, setIsGoodWord] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [props.yourTurn])

    const checkCharClass = (charIdx: number, currChar: string, wordIdx: number) => {
        if (wordIdx === currWordIndex && charIdx === inputValue.length - 1 && currChar === inputValue.substr(inputValue.length - 1)) {
            return 'good-char';
        }
        else if (wordIdx === currWordIndex && charIdx === inputValue.length - 1 && currChar !== inputValue.substr(inputValue.length - 1)) {
            return 'bad-char';
        }
    }

    const checkMatch = () => {
        const wordToCompare = props.words[index][currWordIndex];
        const doesItMatch = wordToCompare === inputValue.trim();
        console.log(doesItMatch)
        return doesItMatch;
    }

    const handleKeyDown = (e : any) => {
        if (e.keyCode === 32 || e.keyCode == 13) {
            if (checkMatch() == true) {
                setInputValue("")
                setCurrWordIndex(currWordIndex + 1)
                setIsGoodWord(true);
                if (currWordIndex === 4) {
                    props.setYourTurn(true);
                    setIndex(index + 1);
                    setCurrWordIndex(0);
                }
            }
            else {
                setInputValue("")
                setIsGoodWord(false);
            }
        }
    }

    return (
        <div className={`type-word ${index === 0 ? "first-word" : "tt"} ${props.yourTurn ? "hidden" : ""}`}>
            <div className="display-word">
                {props.words[index].map((word: string, i: number) => (
                    <span key={i}>
                        <span className={`${i < currWordIndex ? "good-char" : ""}`}>
                            {word.split("").map((char, idx) => (
                                <span className={checkCharClass(idx, char, i)} key={idx}>{char}</span>
                            ))}
                        </span>
                        <span> </span>
                    </span>
                ))}
            </div>
            <input autoComplete="false" ref={inputRef} className={`${!isGoodWord ? "wrong-word" : ""}`} onKeyUp={handleKeyDown} onChange={(e) => { setInputValue(e.currentTarget.value); if (!isGoodWord) setIsGoodWord(true) }} value={inputValue} type="text" />
        </div>
    )
}

export default TypeWord;