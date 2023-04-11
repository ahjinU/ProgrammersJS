function solution(s) {
    let answer=[]
    s=s.replaceAll("{{","")
    s=s.replaceAll("}}","")
    s=s.split('},{');
    s.sort((a,b)=>a.length-b.length)
    s.forEach((e)=>{
        let num=0;
        for(let i=0;i<e.length;i++){
            if(!isNaN(e[i])){
                num=num*10+Number(e[i])
            }
            if(e[i]===','||i==e.length-1) {
                if(!answer.includes(num)) answer.push(num)
                num=0;
            }
            // if(e[i]===','&&!answer.includes(num)&&num!=0){
            //     answer.push(num)
            //     num=0
            // }
        }
    })
    return answer
}