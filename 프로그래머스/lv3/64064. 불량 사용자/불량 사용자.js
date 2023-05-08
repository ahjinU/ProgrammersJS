function solution(user_id, banned_id) {
    const ch = new Array(user_id.length).fill(0);
    const regex = banned_id.map((id)=>new RegExp(`^${id.replaceAll('*','.')}$`));
    //console.log(regex)
    const set = new Set();
    
    const dfs = (index=0, arr=[]) =>{
        //console.log(arr)
        if(index===banned_id.length){
            set.add(arr.sort().join(','));
        }else{
            for(let i=0;i<user_id.length;i++){
                if(ch[i]===1) continue
                
                if(user_id[i].match(regex[index])){
                    ch[i]=1
                    dfs(index+1,[...arr,user_id[i]]);
                    ch[i]=0
                }
            }
        }
    }
    dfs();
    return set.size
}