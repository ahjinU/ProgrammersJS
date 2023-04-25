function solution(numbers) {
    let ch = new Array(numbers.length).fill(-1)
    let stack =[]
    for(let i=0;i<numbers.length;i++){
        while(stack.length&&numbers[stack.at(-1)]<numbers[i]){
            ch[stack.pop()]=numbers[i]
        }
        stack.push(i)
    }
    return ch
}