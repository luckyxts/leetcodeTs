/**
 * Created by Administrator on 2020/6/26.
 */
function evalRPN(tokens: string[]): number {
    let quene: number[] = [];
    tokens.forEach( (s) => {
        if(!isNaN(Number(s))){
            quene.push(parseInt(s))
        }else{
            quene.push(
                cal( quene.pop(), quene.pop(), s)
            )
        }
    })
    return quene[0];
};

function cal(n1: number | undefined, n2: number | undefined, c: string): number{
    if(n1 === undefined || n2 === undefined) {
        return 0;
    };
    if(c === "*")
        return n1 * n2;
    if(c === "-")
        return n2 - n1;
    if(c === "+")
        return n1 + n2;
    else
        return parseInt( (n2/n1) + "")
}