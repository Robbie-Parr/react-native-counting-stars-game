import React from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import {range,createRows} from "../UtilityFunctions";

const NumberGrid = ({maximum,onPress,getColor}) => {
    return(
        <View style={{width:200,maxHeight:225,borderColor:"black",borderWidth:10}}>
            {createRows(range(1,9),3).map(
                row => 
                <View key={row[0]+9} style={{flexDirection: 'row'}}>
                    {row.map(number => 
                        <TouchableOpacity 
                            key={number} 
                            onPress={() => onPress(number)}
                            style={{
                                backgroundColor:getColor(number),
                                padding:10,
                                margin:15,
                                borderRadius:10}}
                        >
                            <Text>{number.toString()}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}
        </View>
    )
}

export default NumberGrid;