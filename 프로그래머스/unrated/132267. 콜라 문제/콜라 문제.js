function solution(a, b, n) {
    let answ=0;
    let num=0;
    while(n>=a){
        answ+=b*Math.floor(n/a);
        n=Math.floor(n/a)*b+n%a;
    }
    return answ;
}