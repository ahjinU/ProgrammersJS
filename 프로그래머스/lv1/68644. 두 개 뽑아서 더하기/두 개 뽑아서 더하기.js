function solution(numbers) {
    let anw=[]
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            anw.push(numbers[i]+numbers[j]);
        }
    }
    anw.sort((a,b)=>a-b);
    for(let i=1;i<anw.length;i++){
        if(anw[i]==anw[i-1]) anw.splice(i--,1);
    }
   return anw;
}