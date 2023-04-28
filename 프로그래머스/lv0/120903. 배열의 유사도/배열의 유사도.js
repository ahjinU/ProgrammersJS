function solution(s1, s2) {
    let cnt=0, cnt2=0 
   s1.forEach((e)=>{
       if(s2.includes(e)) cnt++;
   })
    s2.forEach((e)=>{
       if(s1.includes(e)) cnt2++;
   })
    return Math.min(cnt,cnt2)
}