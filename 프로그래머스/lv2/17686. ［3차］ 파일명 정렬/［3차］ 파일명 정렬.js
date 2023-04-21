function solution(files) {
    let ffiles = files
    let nfiles = []
    let ch = /[A-Z]/
    files = files.map((e)=>e.toUpperCase())
    let index =0;
    for(let file of files){
        let HEAD=''
        let NUMBER = ''
        let i =0;
        for( i=0;i<file.length;i++){
            if(file[i] == " "||isNaN(file[i])) HEAD+=file[i]
            else if(!isNaN(file[i])) break;
        }
        for(let j=i;j<file.length;j++){
            if(NUMBER.length===5) break;
            if(!isNaN(file[j])) NUMBER+=file[j].toString()
            else break;
        }
        nfiles.push([HEAD,NUMBER,index++])
    }
    
    const sortH=(a,c)=>{
        if(a[0]>c[0]) return 1
        else if(a[0]===c[0]){
            if(Number(a[1])>=Number(c[1])) return 1
            else{
                if(a[2]<c[2]) return 1
                else return -1
            }
        }
        else return -1
    } 
    console.log(nfiles)
    nfiles.sort(sortH)
    let final=[]
    nfiles.forEach((e)=>final.push(ffiles[e[2]]))
    return final
}