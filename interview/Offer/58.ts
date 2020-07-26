/**
 * Created by Administrator on 2020/7/26.
 */
function reverseWords(s: string): string {
    return s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
};
function reverseLeftWords(s: string, n: number): string {
    return s.substring(n) + s.substring(0, n);
};