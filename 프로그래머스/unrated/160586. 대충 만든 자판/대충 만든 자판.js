function solution(keymap, targets) {
    let answer = []
    for(let i=0;i<targets.length;i++){
        let now = targets[i]
        let result = 0
        for(let j=0;j<now.length;j++){
            let min = 102
            keymap.forEach((e)=>{
                let index = e.indexOf(now[j])
                if(index!=-1&&min>index) min=index
            })
            if(min==102) {
                result=-1
                break;
            }else result+=(min+1)
        }
        answer.push(result)
    }
    return answer
}