function solution(food) {
    let anw = [0];
    for(let i=food.length-1;i>0;i--){
        let num = Math.floor(food[i]/2);
        for(let j=0;j<num;j++){
             anw.unshift(i);
            anw.push(i);
        }
    }
    return anw.join("").toString();
}