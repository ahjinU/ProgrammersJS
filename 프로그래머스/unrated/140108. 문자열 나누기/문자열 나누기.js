function solution(s) {
    let answer = []
    let cnt =0
    s = s.split("")
   while(s.length){
        let equ = 0, nequ = 0 //같은지
        let fir = s[0] //처음기준
        let i = 0
        while(equ!==nequ||(equ==0&&nequ==0)){
            if(fir===s[i]) equ++;
            else nequ++;
            i++
        }
        cnt++;
        s=s.slice(i,s.length)
    }
    return cnt
}