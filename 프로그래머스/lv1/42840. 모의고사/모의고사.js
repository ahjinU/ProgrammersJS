function solution(answers) {
    let anw=[0,0,0];
    let answer=[];
    const Apattern=[1, 2, 3, 4, 5];
    const Bpattern=[2, 1, 2, 3, 2, 4, 2, 5];
    const Cpattern=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((e,index)=>{
        if(e===Apattern[index%5]) anw[0]++;
        if(e===Bpattern[index%8]) anw[1]++;
        if(e===Cpattern[index%10]) anw[2]++;
    })
    
    let max = Math.max(anw[0],anw[1],anw[2]);
    anw.forEach((e,index)=>{
        if(e===max) answer.push(index+1);
    })
    return answer;

    
    
}