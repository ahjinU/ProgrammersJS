function solution(n) {
    let cnt=n.toString(2).replaceAll("0","").length
    let m=n+1;
    while(1){
        let result = m;
        let ntwo=m.toString(2).replaceAll("0","").length
        if(cnt==ntwo) return result;
        m++;
    }
}