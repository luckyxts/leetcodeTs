/**
 * Created by Administrator on 2020/6/26.
 */
function partition(s: string): string[][] {
    let res: string[][] = [];

    function hs(s: string, start: number, arrTemp: string[]){
        if( start > s.length - 1){
            res.push(arrTemp.slice(0));
        }
        for(let i: number = start + 1; i <= s.length; i++ ){
            let s1: string = s.substring(start, i);
            if( isRe(s1) ){
                arrTemp.push(s1);
                hs(s, i, arrTemp);
                arrTemp.pop();
            }
        }
    }

    function isRe(s: string): boolean{
        return s.split("").reverse().join("") === s;
    }

    hs(s, 0, []);

    return res;
};