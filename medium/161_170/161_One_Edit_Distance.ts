/**
 * Created by Administrator on 2020/7/5.
 */
function isOneEditDistance(s: string, t: string): boolean {
    // 分类讨论，
    // 1，替换的话长度相等
    // 2, 添加删除的化，长度差1
    if( Math.abs( s.length - t.length) > 1
        || s === t) {
        return false;
    }else{
        let m: number = -1;
        for(let i: number = 0; i < s.length; i++){
            if( s[i] !== t[i] ){
                m = i;
                break;
            }
        }
        if( m === -1
            || s.substring(m + 1) === t.substring(m + 1)
            || s.substring(m) === t.substring(m + 1)
            || s.substring(m + 1) === t.substring(m)){
            return true;
        }

    }
    return false;
};