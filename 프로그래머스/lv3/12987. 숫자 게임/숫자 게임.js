function solution(A, B) {
    let answer =0;
    
    A.sort((a,c)=>c-a)
    B.sort((a,c)=>a-c)
    
    for(const a of A){
        if(a<B[B.length-1]){
            answer++;
            B.pop()
        }
    }
    
    return answer
}                                                                                                                                                                                                                               