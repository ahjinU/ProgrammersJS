function solution(numbers, hand) {
    let h = hand==="right"? 'R': 'L';
    let result=''
    let phone = [[1,4,7,'*'],[2,5,8,0],[3,6,9,'#']]
    let lp = [0,3], rp = [2,3]
    numbers.map((e)=>{
        let np=[]
        phone.map((ei,index)=>{
            if(ei.includes(e)) np=[index,ei.indexOf(e)]
        })
        if(np[0]===0){
            result+='L'
            lp=np
        }else if(np[0]===2){
            result+='R'
            rp=np
        }else{
        let Ll = Math.abs(np[0]-lp[0])+Math.abs(np[1]-lp[1])
        let Rl = Math.abs(np[0]-rp[0])+Math.abs(np[1]-rp[1])
        //console.log(Ll,Rl,e)
        //왼쪽이 더 멀면
        if(Ll===Rl){
            result+=h
            h==='R'? rp=np: lp=np;
        }
        else if(Ll>Rl){
            result+='R'
            rp=np
        }
        else{
            result+='L'
            lp=np
        }
        }
    })
    return result
}