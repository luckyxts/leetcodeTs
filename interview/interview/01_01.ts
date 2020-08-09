/**
 * Created by Administrator on 2020/8/9.
 */
function isUnique(astr: string): boolean {
    let dict: any = {};

    for(let i: number = 0; i < astr.length; i++){
        if( dict[astr[i]]){
            return false;
        }
        dict[astr[i]] = true;
    }
    return true;
};