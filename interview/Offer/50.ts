/**
 * Created by Administrator on 2020/7/26.
 */
function firstUniqChar(s: string): string {
    let map: any = {};
    for(let i: number = 0; i < s.length; i++){
        let str: string = s[i];
        if( !map[str] ){
            map[str] = 1;
        }else{
            map[str]++;
        }
    }
    for(let key in map){
        if(map[key] === 1) return key;
    }
    return " "
};