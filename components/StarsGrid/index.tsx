import React from 'react';
import { View } from 'react-native';

import {range,createRows} from "../../UtilityFunctions";
import Star from './Star';

const StarsGrid = ({count}) => {
    return(
        <View style={{flexDirection: 'column',flexWrap: 'wrap',width:150}}>
            {createRows(range(1,count),3).map(
                row => 
                <View key={row[0]+count} style={{flexDirection: 'row',flexWrap: 'wrap'}}>
                    {row.map(number => 
                        <Star key={number}/>
                    )}
                </View>
            )}
        </View>
    )
}

export default StarsGrid;