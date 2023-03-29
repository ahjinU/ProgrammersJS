function solution(s) {
    let ans=[];
    for(let i=0;i<s.length;i++){
        let f = s.slice(0,i);
        if(f.includes(s[i])) ans.push(i-f.lastIndexOf(s[i]));
        else ans.push(-1);
    }
    return ans;
}