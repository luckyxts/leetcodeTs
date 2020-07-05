/**
 * Created by Administrator on 2020/7/5.
 */
function findRepeatedDnaSequences(s: string): string[] {
    let dict: any = {};
    let res: string[] =[];
    let i: number = 0;
    let j : number = 9;
    while(j < s.length ){
        let sT = s.substring(i, j + 1);
        if( dict[sT] === 1 ){
            res.push(sT);
            dict[sT] += 1;
        }else if(!dict[sT]){
            dict[sT] = 1;
        }
        i++;
        j++;
    }
    return res;
};