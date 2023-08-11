import {useEffect,useState} from 'react';

import { range,sum,randomCombination } from '../UtilityFunctions';

const useGameState = (time=100) => {
    const [availableNumbers,setAvailableNumbers] = useState(range(1,9))
    const [candidateNumbers,setCandidateNumbers] = useState([]);
    const [secondsLeft,setSecondsLeft] = useState(time);
    const [stars,setStars] = useState(randomCombination(availableNumbers));

    useEffect(() => {
        if(secondsLeft>0 && availableNumbers.length>0){
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft-1);
            },1000);
            return () => clearTimeout(timerId);
        }
    })

    const setGameState = (newCandidateNumbers) => {
        if(sum(newCandidateNumbers)!==stars){
            setCandidateNumbers(newCandidateNumbers)
        }else{
            const newAvailableNumbers = availableNumbers.filter(
                n => !newCandidateNumbers.includes(n)
                )
            setStars(randomCombination(newAvailableNumbers));
            setAvailableNumbers(newAvailableNumbers);
            setCandidateNumbers([]);
        }
    }

    const isTooManyStars = sum(candidateNumbers)>stars;

    const gameEnd = availableNumbers.length===0? "won" : 
        secondsLeft===0 ? "lost" : 
            "in play";
    
    return {
        stars,
        availableNumbers,
        candidateNumbers,
        secondsLeft,
        isTooManyStars,
        gameEnd,
        setGameState
    }
}

export default useGameState;