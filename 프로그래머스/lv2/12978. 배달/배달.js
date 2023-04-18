function solution(N, road, K) {
  let graph = Array.from({length: N+1},()=>Array())
  let dist = new Array(N+1).fill(Infinity)
  let queue = [] //길 [도착,시간]
  
  for(let i=0;i<road.length;i++){
      graph[road[i][0]].push([road[i][1],road[i][2]])
      graph[road[i][1]].push([road[i][0],road[i][2]])
  }
    
    queue.push([1,0])
    dist[1]=0
    
    while(queue.length){
        const [current,cost] = queue.shift()
        
        graph[current].forEach((e)=>{
            let next = e[0]
            let nextCost = e[1]
            
            if(dist[next]>dist[current]+nextCost){
                dist[next]=dist[current]+nextCost
                queue.push([next,nextCost])
            }
        
        })
    }
    
    return dist.filter((e)=>e<=K).length
    
}