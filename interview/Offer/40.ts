/**
 * Created by Administrator on 2020/7/26.
 */
var getLeastNumbers = function(arr, k) {
    return arr.sort((a, b) => b - a).slice( arr.length - k);
};