function solution(elements) {
    let cnt = elements.length;
    elements.forEach((e)=>elements.push(e))
    let answer=[]
    for(let i=2;i<=cnt;i++){
        for(let j=0;j<cnt+i-1;j++){
            let sum=0;
            for(let k=j;k<j+i;k++){
                sum += elements[k];
            }
            if(Number(sum)) answer.push(sum)
        }
    }
    let final= [...answer,...elements]
    return [...new Set(final)].length
}