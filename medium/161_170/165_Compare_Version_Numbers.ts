/**
 * Created by Administrator on 2020/7/5.
 */
function compareVersion(version1: string, version2: string): number {
    let a1: number[] = version1.split(".").map( v => Number(v));
    let a2: number[] = version2.split(".").map( v => Number(v));
    for(let i: number = 0; i < Math.max(a1.length, a2.length); i++ ){
        if( a1[i] && a2[i]){
            if( a1[i] > a2[i]) return 1;
            else if( a1[i] < a2[i]) return -1
        }else if( a1[i] && a1[i] !== 0 ){
            return 1;
        }else if( a2[i] && a2[i] !== 0 ){
            return -1;
        }
    }
    return 0;
};