function solution(want, number, discount) {
    let result=0;
   for(let i=0;i<discount.length;i++){
       let minus=[]
       for(let i=0;i<number.length;i++){
           minus[i]=number[i]
       }
       let tendays = discount.slice(i,i+10)
       tendays= tendays.sort()
       for(let j=0;j<tendays.length;j++){
           let find = want.indexOf(tendays[j])
           if(minus[find]==0) break;
           if(find>=0){
               minus[find]--;
           }
       }
       if(minus.reduce((a,c)=>a+c)===0) result++;
   }
    return result
}