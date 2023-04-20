function solution(n, works) {
    if((works.reduce((a,c)=>a+c)<=n)) return 0
    works.sort((a,c)=>c-a)
    let cnt =0
    while(cnt<n){
        let max = works[0]
        for(let i=0;i<works.length;i++){
            if(works[i]>=max){
                 works[i]--
                cnt++
            }
            if(cnt===n) break;
        }
    }
   return works.map((e)=>Math.pow(e,2)).reduce((a,c)=>a+c)
}