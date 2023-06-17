function solution(today, terms, privacies) {
    let answer = []
    today = today.split(".").join(""); //오늘 년도, 날짜, 일
    
    let term = {}
    terms.forEach((e)=>{
        e=e.split(" ");
        term[e[0]]= Number(e[1]);
    })
    
    for(let i=0;i<privacies.length;i++){
        let privacie = privacies[i].split(" ");
        let [year, month, day] = privacie[0].split(".");
        let plus = term[privacie[1]];
        month=Number(month)+plus;
        if(month>12){
            if(month%12==0) year = Number(year)+ month/12 -1;
            else year= Number(year)+Math.floor(month/12);
            month = month%12;
            if(month==0) month=12;
        }
        if(month<10) month='0'+month;
        if(Number(''+year+month+day)<=Number(today)) answer.push(i+1);
    }
    
    return answer;
    
}