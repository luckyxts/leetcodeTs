/**
 * Created by Administrator on 2020/6/26.
 */
function reverseWords(s: string): string {
    return s.trim().split(" ").filter( v => v !== "").reverse().join(" ");
};