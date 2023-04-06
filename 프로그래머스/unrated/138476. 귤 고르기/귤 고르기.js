function solution(k, tangerine) {
    let num =[]
    tangerine.forEach((e)=>{
        if(!(num[e])) num[e]=0;
        num[e]++;
    })
    num.sort((a,b)=>{ return a>b? -1: 1; })
    let i=0;
    let cnt=0;
    while(i<k){
        for(let j=0;j<num.length;j++){
           i+=num[j]
            cnt++
            if(i>=k) break;
        }
    }
    return cnt
}