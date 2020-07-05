/**
 * Created by Administrator on 2020/7/5.
 */
class CQueue {
    cquene: any[] = [];
    constructor() {
        this.cquene = [];
    }

    appendTail(value: number): void {
        this.cquene.push(value);
    }

    deleteHead(): number {
        return this.cquene.shift() || -1;
    }
}