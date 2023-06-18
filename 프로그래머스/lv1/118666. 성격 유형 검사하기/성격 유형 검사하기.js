function solution(survey, choices) {
    let total = {
        "R":0,
        "T":0,
        "C":0,
        "F":0,
        "J":0,
        "M":0,
        "A":0,
        "N":0
    }
    let word = ["RT","CF","JM","AN"]
    for(let i=0;i<choices.length;i++){
        let ch = choices[i];
        if(ch>4){
            total[survey[i][1]]+=(ch%4)
        }else if(ch==4) continue;
       else if(ch==1) total[survey[i][0]]+=3
        else if(ch==2) total[survey[i][0]]+=2
        else total[survey[i][0]]+=1
    }
    let result=[]
    for(let i=0;i<word.length;i++){
        let a = word[i][0]
        let b = word[i][1]
        if(total[a]>=total[b]) result.push(a);
        else result.push(b);
    }
    return result.join("")
}