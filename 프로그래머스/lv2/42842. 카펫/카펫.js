function solution(brown, yellow) {
    let stack=[]
    for(let i=1;i<=Math.floor(yellow/2)+1;i++){
        if(yellow%i==0) {
            stack.push([yellow/i,i])
        }
    }
    stack.forEach((e)=>{
        if((e[0]+2)*(e[1]+2)-yellow==brown) {
            a=e[0]
            b=e[1]
        }
    })
    return [a+2,b+2].sort((a,b)=>b-a)
    
}