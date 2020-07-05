/**
 * Created by Administrator on 2020/7/5.
 */
//  二进制中1的个数
var hammingWeight = function(n) {
    return n.toString(2).split("").filter((a) => a === "1").length;
};