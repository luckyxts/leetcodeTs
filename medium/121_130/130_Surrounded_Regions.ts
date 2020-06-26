/**
 * Created by Administrator on 2020/6/26.
 */
var solve = function(board) {
    let quene = [];
    if(board.length === 0 ){
        return;
    };
    let hasChecked = {};
    let needChange = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let s = board[i][j];
            if (hasChecked[i + "-" + j] || s !== "O") {
                continue;
            }
            let isNeedChange = false;
            let isNeedChangeTmp = [];
            quene.push(i + "-" + j);
            while (quene.length > 0) {
                let [i1, j1] = quene.shift().split("-");
                let [a, b] = [Number(i1), Number(j1)];
                if (((a === 0 || a === board.length - 1)
                    || (b === 0 || b === board[i].length - 1))
                    && board[a][b] === 'O') {
                    isNeedChange = true;
                }
                if (board[a][b] === "O" && !hasChecked[a + "-" + b]) {
                    hasChecked[a + "-" + b] = true;
                    isNeedChangeTmp.push(a + "-" + b);
                    if (a > 0 && board[a - 1][b] === "O" && !hasChecked[(a - 1) + "-" + b]) {
                        quene.push((a - 1) + "-" + b);
                    }
                    if (a < board.length - 1 && board[a + 1][b] === "O" && !hasChecked[(a + 1) + "-" + b]) {
                        quene.push((a + 1) + "-" + b);
                    }
                    if (b > 0 && board[a][b - 1] === "O" && !hasChecked[(a) + "-" + (b - 1)]) {
                        quene.push(a + "-" + (b - 1));
                    }
                    if (b < board[a].length - 1 && board[a][b + 1] === "O" && !hasChecked[(a) + "-" + (b + 1)]) {
                        quene.push(a + "-" + (b + 1));
                    }
                }
            }
            if (!isNeedChange) {
                needChange = needChange.concat(...isNeedChangeTmp.slice())
            }
        }
    }
    needChange.forEach((s) => {
        let [i, j] = s.split("-");
        board[Number(i)][Number(j)] = "X";
    })
};