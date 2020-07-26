/**
 * Created by Administrator on 2020/7/26.
 */
function permutation(s: string): string[] {
    // 回溯
    let res: string[] = [];
    let dict: any = {}
    function dfs(tmp: string, nowString: string){
        if(nowString.length === 1 && !dict[tmp + nowString]){
            res.push(tmp + nowString);
            dict[tmp + nowString] = true;
        }else{
            for(let i: number = 0; i < nowString.length; i++){
                dfs(tmp + nowString[i], nowString.substring(0, i) + nowString.substring(i + 1));
            }
        }
    }

    dfs("", s);
    return res;
};