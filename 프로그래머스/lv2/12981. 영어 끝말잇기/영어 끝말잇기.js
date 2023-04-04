function solution(n, words) {
    let already=[words[0]]
    let cnt=0;
    for(let i=1;i<words.length;i++){
        if(words[i-1].slice(words[i-1].length-1)!==words[i].slice(0,1)||already.includes(words[i])){
            return (i+1)%n===0? [n,(i+1)/n]: [(i+1)%n,Math.floor((i+1)/n)+1]
        }
        else already.push(words[i])
    }
    return [0, 0]

    //return answer;
}