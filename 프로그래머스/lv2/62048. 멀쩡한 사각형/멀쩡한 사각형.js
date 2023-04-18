function solution(w, h) {
    let ract = w*h;
    const gcd = (n,m) => (
        n%m==0? m: gcd(m,n%m)
    )
    let cd = gcd(w,h)
    w/=cd
    h/=cd
    return ract-cd*(w+h-1)
}