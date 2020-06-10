/**
 * Created by Administrator on 2020/6/10.
 */
function groupAnagrams(strs: string[]): string[][] {
    // "aaabb" => "3#2"
    let res: string[][] = [];
    let objDict: any = {};
    let arrTemp: number[] = [];
    for(let i: number = 0; i < 26; i++){
        arrTemp[i] = 0;
    }

    for(let i: number = 0; i < strs.length; i++){
        let arrTempSlice = arrTemp.slice(0);
        for(let j: number = 0; j < strs[i].length; j++){
            let index: number = strs[i][j].charCodeAt(0) - 97;
            arrTempSlice[index] += 1;
        }
        let dictKey: string = arrTempSlice.join("#");
        if( objDict[dictKey] ){
            objDict[dictKey].push(strs[i])
        }else{
            objDict[dictKey] = [strs[i]];
        }
    }
    Object.keys(objDict).forEach( (key) => {
        res.push( objDict[key] );
    })
    return res;
}