function solution(array, commands) {
    let anw = [];
    for(let m=0;m<commands.length;m++){
        let array2 = [];
         let i = commands[m][0];
         let j = commands[m][1];
         let k = commands[m][2];
        
        array2= array.slice(i-1,j).sort((a,b)=>a-b);
        anw.push(array2[k-1]);
    }
    return anw
  
    
    
}