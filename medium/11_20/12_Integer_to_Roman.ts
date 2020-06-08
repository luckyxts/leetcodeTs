/**
 * Created by Administrator on 2020/6/8.
 */
function intToRoman(num: number): string {
    let one: string[] = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let two: string[] = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let thr: string[] = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let frt: string[] = ['', 'M', 'MM', 'MMM'];
    return (frt[Math.floor(num / 1000)] + thr[Math.floor(num % 1000 / 100)]
    + two[Math.floor(num % 100 / 10)] +  one[Math.floor(num % 10)])
}