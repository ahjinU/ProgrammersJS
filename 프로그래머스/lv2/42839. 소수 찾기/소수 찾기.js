function solution(numbers) {
    
    const isPrime = (num) => {
        if(num===0||num===1) return false
        for(let i=2;i*i<=num;i++){
            if(num%i==0) return false
        }
        return true
    }
    
    
    const getPer = (str) => {
        const answer =[]
        const n = str.length
        let ch = new Array(n).fill(0)
        
        const dfs = (curStr) =>{
        answer.push(+curStr);
        for(let i=0;i<n;i++){
            if(ch[i]==0){
                ch[i]=1;
                dfs(curStr+str[i])
                ch[i]=0
            }
        }
        }
        
        dfs('');
        answer.shift();
        return answer
        
    }
   
      return [...new Set(getPer(numbers))].filter((e)=>isPrime(e)===true).length
}