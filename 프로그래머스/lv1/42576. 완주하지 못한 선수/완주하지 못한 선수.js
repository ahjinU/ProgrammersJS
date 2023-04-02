function solution(s, k) {
    s.sort();
    k.sort();
    for(let i=0;i<s.length;i++){
        if(s[i]!==k[i]) return s[i]
    }
    
}