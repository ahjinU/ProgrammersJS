function solution(s) {
    let cnt=0;
    let Zcnt=0;
    while(s!=='1'){
        let first = s.length
        s=s.split("0").join("")
        let L = s.length
        Zcnt+=first-L
        s=L.toString(2)
        cnt++;
    }
    return [cnt,Zcnt]
}