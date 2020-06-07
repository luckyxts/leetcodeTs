/**
 * Created by Administrator on 2020/6/7.
 */
function myAtoi(str: string): number {
    // 1.开头不是- + 直接返回0
    // 2.遇到isNaN或者“ ”跳出循环
    // 3.其他场景拼接
    str = str.trim();
    let i: number = 0;
    let resStr: string = "";
    while(true){
        let a: number = Number(str[i]);
        if( i === 0 && (isNaN(a))){
            if( str[i] !== "-"  && str[i] !== "+")
                return 0;
            resStr += str[i]
        }else if(str[i] ===" " || isNaN(a)){
            break
        }else{
            resStr += ("" + a)
        }
        i++
    }
    let k: number = Number(resStr);
    if ( isNaN(k)){
        return 0;
    }
    return  k > Math.pow(2, 31) - 1  ? Math.pow(2, 31) - 1:
        (k < -Math.pow(2, 31)  ? -Math.pow(2, 31 ) : k )
}