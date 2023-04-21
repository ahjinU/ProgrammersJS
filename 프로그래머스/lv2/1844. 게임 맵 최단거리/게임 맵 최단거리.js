function solution(maps) {
    let n = maps.length, m = maps[0].length
    let answer = 1;
    let dx = [-1,1,0,0], dy = [0,0,1,-1]
    let visit = maps
    let queue = [[0,0]]
    visit[0][0]=0
    
    while(queue.length>0){
        let size = queue.length
        
        for(let i=0;i<size;i++){
            let [x,y] = queue.shift()
            for(let j=0;j<4;j++){
                let nx = x+dx[j]
                let ny = y + dy[j]
                if(nx>=0&&nx<n&&ny>=0&&ny<m&&visit[nx][ny]===1){
                    if(nx===n-1&&ny===m-1) return ++answer;
                    queue.push([nx,ny])
                    visit[nx][ny]=0
                }
            }
        }
        answer++;
    }
    return -1
}