function solution(dirs) {
    let cnt=0
    let visit=[]
    const four = {
        "U":[0,1],
        "L":[-1,0],
        "R":[1,0],
        "D":[0,-1]
    }
    let now0 = 0
    let now1 = 0
    for(let i=0;i<dirs.length;i++){
        visit.push(now0.toString()+now1.toString())
        let next0 = now0+four[dirs[i]][0]
        let next1 = now1+four[dirs[i]][1]
        if(Math.abs(next0)>5||Math.abs(next1)>5) continue
        
        now0=next0
        now1=next1
    }
    let final = new Set(visit)
    return final.size
  
}