function solution(id_list, report, k) {
    //let ch = new Array(id_list.length);
    let ch = {};
    let answer = {};
    for(let i=0;i<id_list.length;i++){
        ch[id_list[i]]=0;
        answer[id_list[i]]=0;
    }
    report=Array.from(new Set([...report]))
    for(let i=0;i<report.length;i++){
        report[i]=report[i].split(" ");
        ch[report[i][1]]++;
    }
     for(let i=0;i<report.length;i++){
         if(ch[report[i][1]]>=k) answer[report[i][0]]++;
    }
    return Object.values(answer);
}