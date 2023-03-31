function solution(dartResult) {
    let b='';
    let score2 =[]
    for(let i=0;i<dartResult.length;i++){
        if(!isNaN(dartResult[i])) b+=dartResult[i]
        else{
            b=Number(b)
            
            if(dartResult[i]==='S') score2.push(b)
            else if(dartResult[i]==='D') score2.push(b*b)
            else if(dartResult[i]==='T') score2.push(b*b*b)
            else if(dartResult[i]==='*'){
                score2[score2.length-1]*=2
                score2[score2.length-2]*=2
            }
            else if(dartResult[i]==='#'){
                score2[score2.length-1]*=(-1)
            }
            b=''
        }
        
    }
        return score2.reduce((a,c)=>a+c);
}