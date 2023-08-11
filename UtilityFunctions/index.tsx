const range = (start:number,end:number,increment=1):Array<number> => {
    if(increment===0){
        return [start,end];
    }
    let list =[];
    for(let i=start;increment>0 ? i<=end : i>=end;i+=increment){
        list.push(i);
    }
    return list;
}

const createRows = (list:Array<number>,rowLength:number=3):Array<Array<number>> => {
    let returnList = [[]]
    for(let rowIndex=0;rowIndex<list.length/rowLength;rowIndex++){
        returnList[rowIndex] =[]
        for(let i=0;i<rowLength;i++){
            if(i+rowLength*rowIndex<list.length){
                returnList[rowIndex].push(list[i+rowLength*rowIndex])
            }
        }
    }

    return returnList;
}

const sum = (list:Array<number>):number => list.reduce((total,number) => total+number,0)

const random = (min:number,max:number):number => (Math.random()*(max-min) | 0) + min;

const superSet = (initialSet:Array<number>,operation: (first:number,second:number) => number):Array<number> => {
    let returnList = []
    for(let first of initialSet){
        returnList.push(first)
        for(let second of initialSet){
            if(second!=first){
                returnList.push(operation(first,second));
            }
        }
    }
    returnList = [...new Set(returnList)];//removes duplicates
    return returnList;
}

const randomCombination = (numbers:Array<number>,operation = (first:number,second:number):number => first+second):number => {
    let possibleResults = superSet(numbers, operation);
    return possibleResults[random(0,possibleResults.length)];
}

export {range,createRows,sum,random,randomCombination};