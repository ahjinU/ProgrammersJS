function solution(s, skip, index) {
   //console.log(('z').charCodeAt())
    s=s.split("")
    skip=skip.split("")
    for(let i=0;i<s.length;i++){
        let st = s[i]
        let k = 1
        for(let j=0;j<index;j++){
            let now = st.charCodeAt()+k
            if(now>=123){
                while(1){
                    if(now<123) break;
                    now=97+(now-123)
                }
            }
            //let ind = (now>=123)? 97+(now-123): now;
            let change = String.fromCharCode(now)
            if(skip.includes(change)){
                j--;
            }
            else{
                s[i]=change
            }
            k++
        }
    }
    return s.join("")
}