function solution(clothes) {
    let answer = 1;
    let obj = {};

    for(let [name,type] of clothes){
        obj[type]? obj[type]++: obj[type]=1;
    }
    
    for(let type in obj){
        answer*=obj[type]+1
    }
    
    return answer-1
}