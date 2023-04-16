function solution(msg) {
    let answer = []
    
    let word = {}
    let i =1;
    for(let a = 65; a<=90; a++){
        word[String.fromCharCode(a)]=i;
        i++;
    }
    let now = ""
    for(let k=0;k<msg.length;k++){
        now += msg[k]
        if(!(now in word)){
            answer.push(word[now.slice(0,now.length-1)])
            word[now]=i;
            i++;
            now=msg[k]
        }
    }
    answer.push(word[now])
    return answer
}