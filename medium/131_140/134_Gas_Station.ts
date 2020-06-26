/**
 * Created by Administrator on 2020/6/26.
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
    for(let i = 0; i < gas.length; i++){
        let k: number = i;
        let start: boolean = true;
        let nowGas: number = gas[i];
        while( nowGas >= cost[k] ){
            let nextGas = (k === gas.length - 1? gas[0]: gas[ k + 1]);
            nowGas = nowGas - cost[k] + nextGas;
            k = (k === gas.length - 1 ? 0 : k +1);
            if( k === i ){
                return k;
            }
        }
    }
    return -1;
};