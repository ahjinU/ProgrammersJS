function solution(bridge_length, weight, truck_weights) {
    let now = new Array(bridge_length).fill(0)
    let sum = 0
    let time =0
    while(truck_weights.length){
        time++
        sum-=now.shift()
        if(sum+truck_weights[0]>weight){
            now.push(0)
        }else{
            let plus = truck_weights.shift()
            now.push(plus)
            sum+=plus   
        }
    }
    return time+now.length
    
}