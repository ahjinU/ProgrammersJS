function solution(lottos, win_nums) {
    let answer=[]
    let rank = {
        0:6,1:6,2:5,3:4,4:3,5:2,6:1
    }
    let cnt =0;
    let Zcnt=0
    for(let i=0;i<lottos.length;i++){
        if(win_nums.includes(lottos[i])) cnt++;
        else if(lottos[i]===0) Zcnt++;
    }
    
    return [rank[cnt+Zcnt],rank[cnt]];
    
}