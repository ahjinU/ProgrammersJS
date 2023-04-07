function solution(s) {
    if(s.length%2!==0) return 0
    let answer=0;
    s=s.split("")
    for(let i=0;i<s.length;i++){
        let ch =[]
        let right=true;
        for(let j=0;j<s.length;j++){
            if(s[j]=='('||s[j]=='['||s[j]=='{') ch.push(s[j]);
            else{
                let top = ch.pop();
                if(s[j]==')'&&top=='(') continue;
                if(s[j]==']'&&top=='[') continue;
                if(s[j]=='}'&&top=='{') continue;
                else {
                    right=false;
                }
            }
        }
        if(right) answer++;
        s.push(s[0]);
        s.shift(s[0]);
    }
    return answer;
}