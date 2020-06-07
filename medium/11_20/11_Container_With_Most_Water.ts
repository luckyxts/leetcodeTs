/**
 * Created by Administrator on 2020/6/8.
 */

function maxArea(height: number[]): number {
    // 1. i指向头，j指向屁股
    // 2. i,j往内部手链。当容积更大的情况，只有遇到更高高度，所以
    //      height[i] > height[j] j-- else i++;
    let max: number = 0;
    let i: number = 0;
    let j: number = height.length - 1;
    while(i < j){
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        if(height[i] > height[j]){
            j--;
        }else{
            i++;
        }
    }
    return max;
}
