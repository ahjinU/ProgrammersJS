function solution(begin, target, words) {
    let ch = new Array(words.length).fill(0)
    let cnt =0;
    let final=0;
    
    //console.log(words[1].slice(0,1)+words[1].slice(2,words[1].length))
    //console.log(words[1])
    const dfs = (change) =>{
        if(change===target){
            final=cnt
        }
        
         for(let i=0;i<change.length;i++){
            let totarget = change.split("")
            totarget[i]=target[i]
             //console.log(totarget.join(""))
            if(words.includes(totarget.join(""))){
                let index=words.indexOf(totarget.join(""))
                if(ch[index]===0) {
                    cnt++;
                    ch[index]=1
                    dfs(words[index])
                }
            }
         }
        
        for(let num=0;num<change.length;num++){
            for(let i=0;i<words.length;i++){
            if(ch[i]===0){
                 if(words[i].slice(0,num)+words[i].slice(num+1,words[i].length)===
              change.slice(0,num)+change.slice(num+1,change.length)){
                     ch[i]=1;
                     cnt++;
                    dfs(words[i])
                }
            }
            }
         }
    }
    
    dfs(begin)

    console.log(cnt)
    return final>0? final: 0;
}