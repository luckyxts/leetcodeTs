/**
 * Created by Administrator on 2020/8/9.
 */
function replaceSpaces(S: string, length: number): string {
    return S.substring(0, length).replace(/\s/g, "%20");
};