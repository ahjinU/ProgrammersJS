function solution(n) {
    let cnt=0;
    if(n===1) return 1
    else if(n===2) return 1
    // let tmp = new Array(Math.floor(n/2)+1).fill(0)
    // let nums = tmp.map((e,index)=>{
    //     return index+1
    // }).reverse()
    for(let i=Math.floor(n/2)+1;i>=Math.sqrt(n);i--){
        let sum =0;
        for(let j=i;j>0;j--){
            sum+=j;
            if(sum>n) break;
            //console.log(i,j)
            if(sum===n) {
                cnt++;
                //console.log(cnt)
                break;
            }
        }
    }
    return cnt+1
}