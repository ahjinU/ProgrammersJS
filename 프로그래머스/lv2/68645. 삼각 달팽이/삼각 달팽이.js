function solution(n) {
   let answer = Array.from({length:n},(e,index)=>new Array(index+1).fill(0))
   
   let xx=-1, yy=0, num=1
  while(n>0){
       for(let i=0;i<n;i++){
           answer[++xx][yy]=num++
       }
        for(let i=0;i<n-1;i++){
            answer[xx][++yy]=num++
        }
        for(let i=0;i<n-2;i++){
            answer[--xx][--yy]=num++
        }
      n-=3
   }
    let result=[]
    for(let i=0;i<answer.length;i++){
        result = [...result, ...answer[i]]
    }
    return result
  
    
}