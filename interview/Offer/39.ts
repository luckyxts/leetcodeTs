/**
 * Created by Administrator on 2020/7/26.
 */
var majorityElement = function(nums) {
    let obj = {}
    let n = parseInt(nums.length/2)
    for(let i = 0 ; i < nums.length ; i++){
        let val = nums[i]
        if ( ! obj[val]){
            obj[val] = 1
        }else{
            obj[val] += 1
        }
        if( obj[val] > n){
            return val
        }
    }
};