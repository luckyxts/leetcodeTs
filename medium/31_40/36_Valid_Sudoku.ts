/**
 * Created by Administrator on 2020/6/9.
 */
function isValidSudoku(board: string[][]): boolean {
    // 在一次迭代中完成行，列，格子的校验
    // 用对象记录
    let row: any = {};
    let cow: any = {};
    let box: any = {};
    for(let i: number = 0; i < board.length; i++){
        for(let j: number = 0; j < board[i].length; j++){
            let num: string = board[i][j];
            if( num !== "."){
                let boxIndex: string = Math.floor( i / 3) + "-" + Math.floor( j / 3);
                if( row[i + "-" +num] || cow[j + "-" +num] || box[boxIndex + "-" +num] ){
                    return false;
                }
                row[i + "-"  +num] = true;
                cow[j + "-" + num] = true;
                box[boxIndex + "-" + num] = true;
            }
        }
    }
    return true;
}