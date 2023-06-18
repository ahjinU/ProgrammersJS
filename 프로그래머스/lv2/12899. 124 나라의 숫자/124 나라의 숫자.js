function solution(n) {
    let answer = [4,1,2]
    let result = '' 
    while(n>0){
        result=answer[n%3]+result;
        n=Math.floor((n-1)/3)
    }
    return result
}