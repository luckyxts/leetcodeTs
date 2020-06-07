/**
 * Created by Administrator on 2020/6/7.
 */
/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
    比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 L   C   I   R
 E T O E S I I G
 E   D   H   N
 * */
function convert(s: string, numRows: number): string {
    // sb[0]: p     e
    // sb[1]: a  d  f
    // sb[2]: c     g
    if( numRows === 1){
        return s;
    }
    let res: string = "";
    let down: number = 1;
    let sb: Array< Array<string> > = [];
    let nowSbIndex = 0;
    for(let i: number = 0; i < s.length; i++){
        if( !sb[nowSbIndex] ) sb[nowSbIndex] = [];
        sb[nowSbIndex].push( s[i] );
        if( nowSbIndex === numRows - 1){
            down = -1;
        }else if( nowSbIndex === 0){
            down = 1;
        }
        nowSbIndex = nowSbIndex + down;
    }
    for(let i: number = 0; i < sb.length; i++){
        res += sb[i].join("");
    }
    return res;
}


