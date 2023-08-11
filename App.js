import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NumberGrid from "./components/NumberGrid";
import StarsGrid from './components/StarsGrid';
import GameEndScreen from './components/GameEndScreen';

import useGameState from "./Hooks/useGameState";

const Game = ({reset,time}) => {
  const {
    stars,
    availableNumbers,
    candidateNumbers,
    secondsLeft,
    isTooManyStars,
    gameEnd,
    setGameState
  } = useGameState(time);
  
  const onNumberPress = (number) => {
    if(availableNumbers.indexOf(number)!=-1){
    setGameState(candidateNumbers.indexOf(number)==-1 ? 
      [...candidateNumbers,number] : 
        candidateNumbers.filter(item => item!==number)
    )
    }
  }

  const getColor = (number) => 
    availableNumbers.indexOf(number)===-1 ? "green" : 
      (isTooManyStars && candidateNumbers.indexOf(number)!=-1 ? "red" : 
        (candidateNumbers.indexOf(number)===-1 ? "grey" :
          "blue")
          )
  
  

  return (
    <View style={styles.container}>
      <View style={{paddingLeft:10,paddingRight:10}}>
        <Text style={{alignSelf:'center',fontSize:25}}>Hello and welcome to the game</Text>
        <Text>Select 1 or more numbers that add to the number of stars on the left</Text>
      </View>
      <View style={{display:'flex',flexDirection:"row",marginTop:10}}>
        {gameEnd === "in play" ?
          <StarsGrid count={stars}/> :
          <GameEndScreen gameEnd={gameEnd} onPress={reset}/>
        }
        <NumberGrid maximum={9} onPress={onNumberPress} getColor={getColor}/>
      </View>
      <Text style={{padding:10}}>Time Left: {secondsLeft}</Text>
    </View>
  );
}



export default function App() {
  const [gameNumber,setGameNumber] = useState(1);

  const reset = () => setGameNumber(gameNumber+1)

  return <Game 
    key={gameNumber} 
    reset={reset} 
    time={100-gameNumber*10>10 ? 100-gameNumber*10 : 10}/>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
