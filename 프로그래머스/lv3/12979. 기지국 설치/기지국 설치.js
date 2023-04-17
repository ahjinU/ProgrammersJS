function solution(n, stations, w) {
    let all = (w*2)+1
    let answer = 0;
    let first = []
    if(stations[0]-w-1>0) first.push(stations[0]-w-1)
    for(let i=1;i<stations.length;i++){
        let sum = stations[i]-w-1-(stations[i-1]+w)
        if(sum>0) answer+=Math.ceil(sum/all)
    }
    let last = stations[stations.length-1]
    if (last<n) first.push(n-last-w)
    
    first.forEach((e)=>{
        answer+=Math.ceil(e/all)
    })
    
    return answer
  
}