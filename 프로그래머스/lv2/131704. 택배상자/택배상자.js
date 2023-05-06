function solution(order) {
    let answer = 0
    let now = 0; 
    let num = 1;
    let queue = []
    while(1){
        if(num>order.length+1||now>order.lengt+1) break;
        if(queue.length>0&&order[now]===queue[queue.length-1]){
            //대기 큐 최신꺼랑 같은지 확인
            answer++;
            queue.pop()
            now++;
        }
        else if(order[now]<num){
            break;
        }
        else if(order[now]!=num) {
            queue.push(num)
            num++
        }else{
            answer++;
            num++;
            now++;
        }
    }
    return answer
}