function solution(topping) {
    let dp = new Array(topping.length).fill(0)
    let dp2 = new Array(topping.length).fill(0)
    dp[0]=1
    dp2[topping.length-1]=1
    
    let kind = [...new Set(topping)]
    let ch = new Array(kind.length+1).fill(0)
    let ch2 = new Array(kind.length+1).fill(0)
    ch[topping[0]]=1
    ch2[topping[topping.length-1]]=1
    
    let se = new Set()
    let se2 = new Set()
    
    
    for(let i=0;i<topping.length;i++){
        se.add(topping[i])
        dp[i]=se.size
    }
    
     for(let i=topping.length-1;i>=0;i--){
       se2.add(topping[i])
         dp2[i]=se2.size
    }
    
    return dp.filter((e,index)=>e===dp2[index+1]).length
    
}