function solution(number, limit, power) {
    let result=0
    let ch = new Array(number).fill(1);
    for(let i=2;i<=number;i++){
        for(let j=i;j<=number;j+=i){
            ch[j-1]++;
        }
    }
    ch.forEach((e)=>{
        result+= e>limit? power: e;
    })
  
    return result
}