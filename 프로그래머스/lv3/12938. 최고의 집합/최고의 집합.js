function solution(n, s) {
    let min = Math.floor(s/n)
    let answer = new Array(n).fill(min)
    for(let i=0;i<s-min*n;i++){
        answer[i]++;
    }
    answer.sort((a,c)=>a-c)
    if(answer[0]===0) return [-1]
    else return answer
}