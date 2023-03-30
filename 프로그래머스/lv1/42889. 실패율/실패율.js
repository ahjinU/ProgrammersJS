
function solution(N, stages) {
    let anw=[]
    let answer=[]
    for(let i=1;i<=N+1;i++){
        anw[i]=0
        answer[i]=new Array();
        answer[i][0]=0;
        answer[i][1]=i;
    }
    for(let i=0;i<stages.length;i++){
        anw[stages[i]]++;
    }
    for(let i=1;i<=N;i++){
        let total=0;
        for(let j=i;j<=N+1;j++){
            total+=anw[j];
        }
        answer[i][0]=anw[i]/total;
    }
    answer.sort((a,b)=>b[0]-a[0]).splice(N,2);
    let answer2=answer.map((e)=> e[1]);
    return answer2;
}