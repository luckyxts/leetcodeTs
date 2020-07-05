/**
 * Created by Administrator on 2020/7/5.
 */
// 表示数值的字符串
function isNumber(s: string): boolean {
    if(s === " ") return false;
    return !isNaN(Number(s));
};