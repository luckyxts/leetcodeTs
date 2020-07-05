/**
 * Created by Administrator on 2020/7/5.
 */
function numIslands(grid: string[][]): number {
    // 广度遍历
    let dict: any = {};
    let res: number = 0;
    let quene: any[] = [];
    for(let i: number = 0; i < grid.length; i++){
        for(let j: number = 0; j <grid[i].length; j++){
            if(!dict[`${i}-${j}`] && grid[i][j] === `1`){
                dict[`${i}-${j}`] = true;
                quene.push({i, j});
                res++;
                while( quene.length ){
                    let t: any = quene.shift();
                    if( t ){
                        let {i, j} = t;
                        pushQuene(quene, i + 1, j);
                        pushQuene(quene, i - 1, j);
                        pushQuene(quene, i, j + 1);
                        pushQuene(quene, i, j - 1);
                    }
                }
            }
        }
    }
    function pushQuene(quene: any[], i: number, j: number): void{
        if(grid[i] && grid[i][j] === `1` && !dict[`${i}-${j}`] ){
            dict[`${i}-${j}`] = true;
            quene.push({i, j})
        }
    }
    return res;
};