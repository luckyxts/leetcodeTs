/**
 * Created by Administrator on 2020/6/13.
 */
function exist(board: string[][], word: string): boolean {
    // dfs用闭包包裹一个结果变量，当为true的时候，不进行递归
    let res: boolean = false;
    function dfs(nowIndex: number, word: string, row: number, col: number, hasThrough: string[]): void{
        // 没有找到的时候，继续递归
        if( nowIndex > word.length - 1){
            res = true;
        }
        let leftStr: string | null = col === 0 ? null : board[row][col - 1];
        let rightStr: string | null = col === board[row].length - 1 ? null : board[row][col + 1];
        let updateStr: string | null = row === 0 ? null : board[row - 1][col];
        let downStr: string | null = row === board.length - 1 ? null : board[row + 1][col];
        searchStr(leftStr, nowIndex, hasThrough, row, col - 1);
        searchStr(rightStr, nowIndex, hasThrough, row, col + 1);
        searchStr(updateStr, nowIndex, hasThrough, row - 1, col);
        searchStr(downStr, nowIndex, hasThrough, row + 1, col);
    }
    function searchStr(str: string | null, nowIndex: number, hasThrough: string[], row: number, col: number): void{
        if( !res && str === word[nowIndex] && hasThrough.indexOf(row + "-" + col ) === -1){
            dfs(nowIndex + 1, word, row, col, copyAndAddThrough(row, col, hasThrough));
        }
    }
    function copyAndAddThrough(row: number, col: number, hasThrough: string[]): string[]{
        let nextHasThrough: string[] = hasThrough.slice(0);
        nextHasThrough.push(row + "-" + col);
        return nextHasThrough;
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if( board[i][j] === word[0] ){
                let hasThrough: string[] = [i + "-" + j];
                dfs(1, word, i, j, hasThrough);
            }
        }
    }
    return res;
}

