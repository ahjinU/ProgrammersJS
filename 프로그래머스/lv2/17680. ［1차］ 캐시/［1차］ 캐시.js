function solution(cacheSize, cities) {
    let answer =0;
    let cash =[];
    let num=0;
     for(let i=0;i<cities.length;i++){
        cities[i]=cities[i].toUpperCase()
    }
    for(let i=0;i<cities.length;i++){
        if(cash.includes(cities[i])) {
            cash.splice(cash.indexOf(cities[i]),1)
            cash.push(cities[i])
            answer+=1;
            continue;
        }
        else answer+=5;
        cash.push(cities[i])
        num++;
        if(num==cacheSize+1) {
            cash.shift(cash[0])
            num--;
        }
    }
    return answer;
}