function solution(X, Y) {
    let answer =[]
    let Xch = new Array(10).fill(0)
    let Ych = new Array(10).fill(0)
    X.split("").forEach((e)=>Xch[e]++)
    Y.split("").forEach((e)=>Ych[e]++)
    for(let i=0;i<10;i++){
        while(Xch[i]>0&&Ych[i]>0){
            answer.push(i)
            Xch[i]--
            Ych[i]--
        }
    }
    if(answer.length===0) return "-1"
   answer.sort((a,c)=>c-a)
    if(answer[0]==0) return "0"
    else return answer.join("")
}