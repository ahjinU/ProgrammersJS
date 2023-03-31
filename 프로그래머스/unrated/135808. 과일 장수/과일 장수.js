function solution(k, m, score) {
    let cnt = Math.floor(score.length/m)
    let answer=0;
    score.sort((a,b)=>b-a);
    //console.log(score)
    for(let i=m-1;i<score.length;i+=m){
        answer+=score[i]*m
    }
    return answer
    
  
}