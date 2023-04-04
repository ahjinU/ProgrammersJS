function solution(s){
    let n=0;
    s= s.split("")
    for(let i=0;i<s.length;i++){
        n+= s[i]==='('? 1: -1;
        if(n<0) return false
    }
    // s.forEach((e)=>{
    //     n+= e==='('? 1: -1;
    //     if(n<0) return false;
    // })
    return n===0? true: false;
    
}