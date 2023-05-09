function solution(number) {
    let answer =0
  let cnt = 3
  let tmp = []
  const backtrack = (r) =>{
      if(tmp.length===cnt){
          if(tmp.reduce((a,c)=>a+c)===0) answer++;
          return
      }
      for(let i=r;i<number.length;i++){
          tmp.push(number[i])
          backtrack(i+1)
          tmp.pop()
      }
  }
  backtrack(0)
   return answer
}