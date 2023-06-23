function solution(m, n, board) {
    let answer = 0;
    
    board = board.map(v=>v.split(""));
    
    while(1){
        const arr = []
        for(let i=0;i<m-1;i++){
            for(let j=0;j<n-1;j++){
                if(board[i][j]&&
                  board[i][j]===board[i+1][j]&&
                  board[i][j]===board[i][j+1]&&
                  board[i][j]===board[i+1][j+1]){
                    arr.push([i,j])
                }
            }
        }
        
        if(!arr.length){
            return [].concat(...board).filter(v=>!v).length;
        }
        
        for(let i=0;i<arr.length;i++){
            const x = arr[i][0];
            const y = arr[i][1];
            board[x][y]=0;
            board[x][y+1]=0;
            board[x+1][y]=0;
            board[x+1][y+1]=0;
        }
        
        for(let i=m-1;i>0;i--){
            if(!board[i].some(v=>!v)) continue;
            
            for(let j=0;j<n;j++){
                for(let k=i-1;k>=0&&!board[i][j];k--){
                    if(board[k][j]){
                        board[i][j]=board[k][j];
                        board[k][j]=0;
                        break;
                    }
                }
            }
            
            //console.log(board)     
        }
    }
}