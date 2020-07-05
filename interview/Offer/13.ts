/**
 * Created by Administrator on 2020/7/5.
 */
// 机器人运动范围
function movingCount(m: number, n: number, k: number): number {
    // 广度优先遍历呀吧
    let quene: number[][]= [[0, 0]];
    let dict: any = {};
    let res: number = 0;
    while( quene.length ){
        let s: number[] | undefined = quene.pop();
        if(s){
            let [a, b] = s;
            if( !dict[ a + "-" + b] ){
                dict[a + "-" + b] = true;
                if( testSatisfied(a, b, k) ){
                    res += 1;
                    (a > 0) && quene.push([a - 1, b]);
                    (a < m - 1) && quene.push([a + 1, b]);
                    (b > 0) && quene.push([a, b - 1]);
                    (b < n - 1) && quene.push([a, b + 1]);
                }
            }
        }
    }

    return res;

    function testSatisfied(a: number, b: number, k: number): boolean{
        let sum: number = reduce(a) + reduce(b);
        return sum <= k;
    }

    function reduce(a: number): number{
        let k: string = String(a);
        let sum: number = 0;
        for(let i: number = 0; i < k.length; i++){
            sum += Number(k[i]);
        }
        return sum;
    }
};