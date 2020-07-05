/**
 * Created by Administrator on 2020/7/5.
 */
// 替换空格
function replaceSpace(s: string): string {
    return s.replace(new RegExp(' ', 'g'), "%20");
};