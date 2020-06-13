/**
 * Created by Administrator on 2020/6/14.
 */
function grayCode(n: number): number[] {
    // 回溯。。
    let strTmp: string = "";
    let res: number[] = [];
    for(let i: number = 1; i <= n; i++){
        strTmp += "0"
    }
    res.push(0);
    let dict: any = {
        [strTmp]: true,
    };
    function dfs(nowStr: string): void{
        for(let i: number = 0; i < nowStr.length; i++){
            let newStr: string = nowStr.substring(0, i) + (nowStr[i] === "0" ? "1" : "0") + nowStr.substring(i + 1);
            if( !dict[newStr] ){
                res.push( parseInt( newStr, 2));
                dict[newStr] = true;
                dfs(newStr);
            }
        }
    }
    dfs(strTmp);

    return res;
}