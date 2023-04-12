    
    function allV(ch){
        for(let i=0;i<ch.length;i++){
            if(ch[i]===0){
                return false
            }
        }
        return true
    }

function solution(k, dungeons) {
    let max=0;
    let ch = new Array(dungeons.length).fill(0)

    dfs(0,k)
    function dfs(num,cnt){
        max = max<num? num: max;
        for(let i=0;i<dungeons.length;i++){
            if(ch[i]===1) continue;
            if(cnt>=dungeons[i][0]){
                 ch[i]=1;
                dfs(num+1,cnt-dungeons[i][1])
                ch[i]=0;
            }
        }
    }
    return max
}