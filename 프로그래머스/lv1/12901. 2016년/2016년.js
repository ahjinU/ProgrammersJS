function solution(a, b) {
    const week=[
        "SUN","MON","TUE","WED","THU","FRI","SAT"
    ]
    const days = [
        31,29,31,30,31,30,31,31,30,31,30,31
    ]
    let total=b;
    for(let i=0;i<a-1;i++){
        total+=days[i];
    }
    return week[(total+4)%7];
}