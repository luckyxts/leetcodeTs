/**
 * Created by Administrator on 2020/7/5.
 */
// 矩阵中的路径
function exist(board: string[][], word: string): boolean {
    function dfs(i: number, j: number, k: number): boolean{
        if( k === word.length ){
            return true;
        }
        if( !board[i] || !board[i][j] || board[i][j] !== word[k] ){
            return false;
        }
        let t: string = board[i][j];
        board[i][j] = "/"
        let res: boolean = dfs(i + 1, j, k + 1) ||  dfs(i - 1, j, k + 1) ||  dfs(i, j + 1, k + 1) ||  dfs(i, j - 1, k + 1);
        board[i][j] = t;
        return res;
    }
    for(let i: number = 0; i < board.length; i++){
        for(let j: number = 0; j < board[i].length; j++){
            if(dfs(i, j, 0)){
                return true;
            }
        }
    }
    return false
};