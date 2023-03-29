function isPrime(x){
    for(let j=2;j<=Math.sqrt(x);j++){
           if(x%j===0) return false;
       }
    return true;
}

function solution(n) {
    let cnt=1;
   for(let i=3;i<=n;i++){
       if(isPrime(i)) cnt++;
   }
    return cnt;
}