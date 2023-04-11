function solution(progresses, speeds) {
    let answer=[]
  let day = progresses.map((e,index)=>{
      return Math.ceil((100-e)/speeds[index])
  })
  let max =day[0];
    let cnt=0;
  for(let i=0;i<day.length;i++){
      if(day[i]>max){
          answer.push(cnt);
          max=day[i]
          cnt=1;
      }
      else cnt++;
  }
    answer.push(cnt)
    return answer;
}