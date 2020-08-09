/**
 * Created by Administrator on 2020/8/9.
 */
function findWhetherExistsPath(n: number, graph: number[][], start: number, target: number): boolean {
    let res: boolean = false;
    let dict: any = {};
    graph.forEach((g) => {
        let [start, end] = g;
        if(!dict[start]){
            dict[start] = [];
        }
        dict[start].push(end);
    });
    function dfs(dict: any, hasPath: number[], now: number): void{
        if ( dict[now] && dict[now].includes(target) ){
            res = true;
        }else{
            for(let i: number = 0; dict[now] && i < dict[now].length; i++){
                let nowTmp: number = dict[now][i];
                if( !res && hasPath.indexOf(nowTmp) === -1 ){
                    hasPath.push(nowTmp);
                    dfs(dict, hasPath, nowTmp);
                    hasPath.pop();
                }
            }
        }

    }

    dfs(dict, [], start);


    return res;
};