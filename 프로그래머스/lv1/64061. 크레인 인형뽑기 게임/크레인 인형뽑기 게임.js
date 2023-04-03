function solution(board, moves) {
    let S = board.length
    let cnt=0
    let total=[]
    moves.map((e)=>{
        let top = total[total.length-1];
        let n = 0
        for(let i=0;i<S;i++){
            //주워 담아
           if(board[i][e-1]!==0){
               total.push(board[i][e-1])
               n++;
               //console.log(board)
               board[i][e-1]=0
               break;
           }
        }
        if(n!==0&&top==total[total.length-1]){
            total.pop()
            total.pop()
            cnt+=2
        }
    })
    return cnt
    
}