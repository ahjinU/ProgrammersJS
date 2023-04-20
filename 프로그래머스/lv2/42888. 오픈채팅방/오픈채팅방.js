function solution(record) {
    let visit = {}
    let orders = {'Enter':'들어왔습니다.', 'Leave':'나갔습니다.'}
    let result = []
    for(let reco of record){
        let [order, id, name] = reco.split(" ")
        if(order==='Enter'||order==='Change') {
            visit[id]=name
        }
        result.push([id,order])
    }
    let final = []
    for(let re of result){
        if(re[1]==='Change') continue
        else final.push(`${visit[re[0]]}님이 ${orders[re[1]]}`)
    }
    return final
}