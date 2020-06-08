/**
 * Created by Administrator on 2020/6/8.
 */
function letterCombinations(digits: string): string[] {
    // 全排列
    if( digits.length === 0 ){
        return [];
    }
    let objDict: any = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    let res: string[] = objDict[digits[0]].split("");
    for(let i: number = 1; i < digits.length; i++){
        let tmp: string[] = [];
        let d: string = objDict[digits[i]];
        for(let j: number = 0; j < res.length; j++){
            for(let k: number = 0; k < d.length; k++){
                tmp.push(
                    res[j] + d[k]
                )
            }
        }
        res = tmp.slice(0);
    }
    return res;
}
