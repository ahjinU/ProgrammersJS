function solution(new_id) {
    let ch = /[a-z,'.','_','0-9'.'\-']/
    
    const isOkay = (str) => {
        if(str===',') return false
        if(ch.test(str)) return true
        return false
    }
    
    
    let now_id = new_id.toLowerCase().split("")
                .filter((e)=>isOkay(e))
                .join("").replaceAll(/\.{2,}/gi,'.')
    if(now_id[0]==='.') now_id=now_id.slice(1,now_id.length)
    if(now_id[now_id.length-1]==='.') now_id=now_id.slice(0,now_id.length-1)
    if(now_id.length===0) return 'aaa'
    else if(now_id.length>=16){
        now_id=now_id.slice(0,15)
        if(now_id[14]==='.') now_id=now_id.slice(0,14)
    }

    if(now_id.length<=2){
        let last = now_id[now_id.length-1]
        while(now_id.length!==3){
            now_id+=last
        }
    }
    
   
    
   
    
    return now_id;
}