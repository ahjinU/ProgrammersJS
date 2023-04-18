function solution(str1, str2) {
    let check = /[A-Z]/
    let common1=0, common2=0
    let union1=[]
    let Nunion1=[]
    let union2=[]
    let Nunion2=[]
    let answer = []
    str1=str1.toUpperCase()
    str2=str2.toUpperCase()
    str1.split("").reduce((a,c)=>{
        if(check.test(a)&&check.test(c)){
            Nunion1.push(a+c)
        }
        return c
    })
     str2.split("").reduce((a,c)=>{
        if(check.test(a)&&check.test(c)){
            Nunion2.push(a+c)
        }
        return c
    })
    let union = Nunion1.length+Nunion2.length
     str1.split("").reduce((a,c)=>{
        if(Nunion2.includes(a+c)){
            Nunion2.splice(Nunion2.indexOf(a+c),1)
            common1++;
        }
        return c
    })
    
     str2.split("").reduce((a,c)=>{
        if(Nunion1.includes(a+c)){
            Nunion1.splice(Nunion1.indexOf(a+c),1)
            common2++;
        }
        return c
    })
    
    if(union ==0) return 65536
    let common=Math.min(common1,common2)
    union-=common
    let final = common/union
    return Math.floor(final*65536)
}