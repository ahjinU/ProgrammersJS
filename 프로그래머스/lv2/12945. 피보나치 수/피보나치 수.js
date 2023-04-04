function solution(n){
    num=[0,1]
    for(let i=1;i<n;i++){
         num.push((num[i-1]+num[i])%1234567)
    }
   return num[n]
    
}