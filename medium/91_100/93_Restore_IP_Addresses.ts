/**
 * Created by Administrator on 2020/6/15.
 */
function restoreIpAddresses(s: string): string[] {
    //回溯
    let res: string[] = [];
    function dfs(nowIndex: number, resTmp: string[], nowStrLength: number):void{
        if( resTmp.length === 3 ){
            let leftIndex: number =  s.length - nowStrLength;
            if(  leftIndex <= 4 &&leftIndex > 0 &&
                Number(s.substring(nowIndex)) <= 255) {
                if( leftIndex === 1 || (s[nowIndex] !== "0")) {
                    res.push(
                        resTmp.concat(s.substring(nowIndex)).join(".").slice(0)
                    )
                }
            }
        }
        if( nowIndex < s.length ){
            tryString(nowIndex, 1, nowStrLength, resTmp);
        }
        if( nowIndex < s.length - 1 && s[nowIndex] !== "0"){
            tryString(nowIndex, 2, nowStrLength, resTmp);
        }
        if( nowIndex < s.length - 2 && s[nowIndex] !== "0"){
            tryString(nowIndex, 3, nowStrLength, resTmp);
        }
    }

    function tryString(nowIndex: number, strLength: number, nowStrLength: number, resTmp: string[]): void {
        let str: string = s[nowIndex];
        if( strLength === 2 ){
            str += s[nowIndex + 1]
        }else if( strLength === 3){
            str += s[nowIndex + 1] + s[nowIndex + 2]
        }
        if (Number(str) <= 255 && (strLength === 1 || Number(str) > 0)
            && Math.floor((s.length - nowStrLength - strLength) / (4 - resTmp.length - 1)) <= 4) {
            resTmp.push(str);
            dfs(nowIndex + strLength, resTmp, nowStrLength + strLength);
            resTmp.pop()
        }
    }
    dfs(0, [] , 0);
    return res;
}