function solution(s) {
    let map = {
        "[":+1,
        "]":-1,
        "(":+2,
        ")":-2,
        "{":+3,
        "}":-3
    }
    let result=0;
    s= s.split("")
    for(let i=0;i<s.length;i++){
        let ch =[];
        for(let j=0;j<s.length;j++){
            ch.push(map[s[j]])
            if(!ch.includes(-map[s[j]])
               &&map[s[j+1]]!==-map[s[j]]
              &&map[s[j+1]]<0) break;
            if(map[s[j]]<0&&!ch.includes(-map[s[j]])) break;
            if(ch.reduce((a,c)=> a+c)<0) break;
        }
        if(ch.reduce((a,c)=> a+c)==0) {
            result++;
        }
        s.push(s[0])
        s.shift(s[0])
        //console.log(s,result)
    }
   
    return result
}