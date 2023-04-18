function solution(operations) {
    let queue = []
    let max = 0
    let min = 0
    operations.forEach((e)=>{
         max = Math.max(...queue)
         min = Math.min(...queue)
         if(e[0]==='I'){
            e=e.split(" ")
            queue.push(e[1])
        }
        else{
            if(e[2]==="1"){
            queue.splice(queue.indexOf(max.toString()),1)
            }else{
            queue.splice(queue.indexOf(min.toString()),1)
            }
        }
       
        console.log(queue)
    })
    if(queue.length===0) return [0,0]
    max = Math.max(...queue)
    min = Math.min(...queue)
    return [max,min]
}