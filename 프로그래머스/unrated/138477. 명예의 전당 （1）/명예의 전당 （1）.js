function solution(k, score) {
    let b = []
    let answer=[]
    for(let i=0;i<score.length;i++){
        b.push(score[i]);
        b.sort((a,b)=>b-a);
        b.length<k? answer.push(b[i]): answer.push(b[k-1]);
    }
    return answer;
}