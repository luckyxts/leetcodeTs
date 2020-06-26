/**
 * Created by Administrator on 2020/6/26.
 */
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    let dict: any = {};
    let res: number = 0;
    let quene: string[] = [];
    let list: string[] = wordList.slice(0);
    quene.push(beginWord);
    dict[beginWord] = true;

    let searchDict: any = {};
    list.push(beginWord);

    list.forEach((word) => {
        for(let i: number = 0; i < word.length; i++){
            let newWord: string = word.substring(0, i) + "*" + word.substring(i + 1);
            if( !searchDict[newWord] ){
                searchDict[newWord] = [word] ;
            }else{
                searchDict[newWord].push(word);
            }
        }
    });
    while( quene.length > 0 ){
        let n: number = quene.length;
        while(n > 0){
            let s1: string = quene.shift() || "";
            if( s1 === endWord ){
                return res + 1;
            }
            for(let i: number = 0; i < s1.length; i++){
                let newWord: string = s1.substring(0, i) + "*" + s1.substring(i + 1);
                if( newWord in searchDict ){
                    let arr: string[] = searchDict[newWord];
                    arr.forEach( (a) => {
                        if(!dict[a]){
                            dict[a] = true;
                            quene.push(a);
                        }
                    })
                }

            }
            n--;
        }
        res++;
    }
    return 0;
}