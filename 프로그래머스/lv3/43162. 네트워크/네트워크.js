function solution(n, computers) {
    let ch = new Array(n).fill(0)
    let cnt=0;
    
   for(let i=0;i<n;i++){
       if(ch[i]==0){
           dfs(0,i)
           cnt++;
       }
   }
    function dfs(num,index){
        if(ch[num]==0){
                   ch[num]=1;
            for(let i=0;i<n;i++){
                if(computers[index][i]==1) dfs(i,i)
            }
        }
    }
    return cnt
}