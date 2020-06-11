/**
 * Created by Administrator on 2020/6/11.
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    for(let i: number = 0; i < obstacleGrid.length; i++){
        for(let j: number = 0; j < obstacleGrid[i].length; j++){
            if( obstacleGrid[i][j] === 1){
                obstacleGrid[i][j] = -1;
            }else if( i === 0 ){
                if(obstacleGrid[i][j - 1] !== -1){
                    obstacleGrid[i][j] = 1;
                }else{
                    obstacleGrid[i][j] = -1;
                }
            }else if( j === 0){
                if(obstacleGrid[i - 1][j] !== -1){
                    obstacleGrid[i][j] = 1;
                }else{
                    obstacleGrid[i][j] = -1;
                }
            }else{
                let leftStep: number = obstacleGrid[i - 1][ j] === -1 ? 0: obstacleGrid[i - 1][ j];
                let rightStep: number = obstacleGrid[i][ j - 1] === -1 ? 0: obstacleGrid[i ][ j - 1];
                obstacleGrid[i][j] = leftStep + rightStep;
            }
        }
    }
    let res: number = obstacleGrid[obstacleGrid.length - 1][obstacleGrid[obstacleGrid.length - 1].length - 1];
    return res === -1 ? 0 : res;
}