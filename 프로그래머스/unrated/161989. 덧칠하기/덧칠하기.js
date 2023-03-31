function solution(n, m, section) {
    let answer=1;
    let a = section[0];
    section.forEach((e)=>{
        if(a+m-1<e){
            a=e;
            answer++;
        }
    })
    return answer;
}
