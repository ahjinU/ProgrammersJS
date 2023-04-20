function solution(fees, records) {
     records = records.map((e)=>e.split(" "))
     let cars  = [...new Set(records.map((e)=>e[1]))]
     let times=new Array(cars.length).fill(0)
     
    cars.sort((a,c)=>a-c)
    records.sort((a,c)=>a[1]-c[1])
    
    let tmp = []
    for(let i=0;i<records.length-1;i++){
        let index = cars.indexOf(records[i][1])
        let time =0
        if(records[i][2]==='IN'&&records[i+1][2]==='OUT'){
            time = timeCal(records[i][0],records[i+1][0])
            i++
        }
        else{
            time = timeCal(records[i][0],"23:59")
        }
        times[index]+=time
    }

    let last = records.length-1
    if((records[last][2]==='IN')){
        let index = cars.indexOf(records[last][1])
        let time = timeCal(records[last][0],"23:59")
        times[index]+=time
    }
    
    //시간 계산
    function timeCal(a,c){
        let ah = a.split(":")[0]
        let ch = c.split(":")[0]
        let am = a.split(":")[1]
        let cm = c.split(":")[1]
        
        let result = (ch-ah)>0 ? Math.abs(am-cm-60)+60*(ch-ah-1): Math.abs(am-cm)
        return result
    }
    
    console.log(times)
    return times.map((e)=>{
                if(e<=fees[0]) return fees[1]
                else return fees[1]+(Math.ceil((e-fees[0])/fees[2]))*fees[3];
    }
    )
    
}