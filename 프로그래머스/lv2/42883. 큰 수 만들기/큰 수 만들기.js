function solution(number, k) {
    let fmax =0
    let findex = -1
    let answer=''
    let n = number.length
    
    for(let p=n-k;p>0;p--){
        if(findex+1+p===n) {
            answer+=number.slice(findex+1,number.length)
            return answer
        }
        for(let i=findex+1;i<n-p+1;i++){
            let now = +number[i]
            if(now>fmax) {
            fmax=now
            findex=i
            }
            if(now===9) break
            }
        answer+=fmax
        fmax=0
    }
    
    return answer
}