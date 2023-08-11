import React from 'react';
import { Text, View,Button } from 'react-native';


const GameEndScreen = ({gameEnd,onPress}) => {
    return(
        <View style={{margin:20,width:150}}>
            <Text style={{padding:"10%"}}>{gameEnd === "won" ? "Well done you Won the game" : "You ran out of time"}</Text>
            <Button title={"Replay?"} color={"blue"} onPress={onPress}/>
        </View>
    )
}

export default GameEndScreen;