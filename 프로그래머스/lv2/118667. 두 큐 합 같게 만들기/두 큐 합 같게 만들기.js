function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a,c)=>a+c);
    let sum2 = queue2.reduce((a,c)=>a+c);
    
    let cnt = 0;
    let p1 = 0;
    let p2 = 0;
    while(sum1!==sum2){
        if(p1>=queue1.length+queue2.length||p2>=queue1.length+queue2.length) return -1;
        if(sum1>sum2){
            if(p1>=queue1.length){
                sum2+=queue2[p1-queue1.length];
                sum1-=queue2[p1-queue1.length];
                
            }
            else{
                sum2+=queue1[p1];
                sum1-=queue1[p1];
            }
            p1++;
        }
        else{
             if(p2>=queue2.length){
                sum1+=queue1[p2-queue2.length];
                sum2-=queue1[p2-queue2.length];
                
            }
            else{
                sum1+=queue2[p2];
                sum2-=queue2[p2];
            }
            p2++;
        }
        cnt++;
    }
    
    return cnt;
}