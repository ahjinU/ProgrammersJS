function solution(s) {
    s=s.split(" ")
    let result=''
    s.forEach((e)=>{
        e=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()
        result+=e+' '
    })
    return result.split("").reverse().slice(1).reverse().join("")
}