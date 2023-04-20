function solution(n, t, m, p) {
    let answer ='0'
    let result=''
    let last  = m*(t-1)+p
    let i =1;
    while(1){
        if(last<(Math.pow(n,i)-Math.pow(n,i-1))*i){
             for(let j=Math.pow(n,i-1);j<=last;j++){
                let num = (j).toString(n)
                answer+=num
            }
            break;
        }
        else{
            for(let j=Math.pow(n,i-1);j<Math.pow(n,i);j++){
                let num = (j).toString(n)
                answer+=num
            }
            i++;
        }
    }
    //i-1만큼 제곱했을때 하나당 자릿수는 i개
    console.log(i)
    for(let i=p-1;i<last;i+=m){
        result+=answer[i].toUpperCase()
    }
    return result
}