function solution(n, left, right) {
    let answer=[]
    for(let i=left+1;i<=right+1;i++){
        if(i%n==0) answer.push(n);
        else answer.push(Math.max(Math.floor(i/n)+1,i%n))
    }
    return answer
}