function solution(orders, course) {
    let total = []
    let ch = {}
    let result = []
    
    function dfs(now, e, st){
        if(st>total.length-1){
            if(now.length==e) {
                if(ch[now]>0) ch[now]++;
                else ch[now]=1;
            }
            return;
        }
        dfs(now+total[st],e,st+1);
        dfs(now,e,st+1);
    }
    for(let j=0;j<course.length;j++){
        for(let i=0;i<orders.length;i++){
            total = orders[i].split("").sort();
            dfs('',course[j], 0)
        }  
        let f = Math.max(...Object.values(ch))
        if(f>=2){
            Object.keys(ch).forEach((e)=>{
                if(ch[e]==f) result.push(e)
            })
        }
        ch={}
    }
    
    return result.sort()
}