function solution(skill, skill_trees) {
    let cnt =0;
    for(let i =0;i<skill_trees.length;i++){
        let now = skill_trees[i]
        let redu = []
        for(let j =0;j<now.length;j++){
            if(!skill.includes(now[j])){
                now = now.slice(0,j)+now.slice(j+1,now.length)
                j--;
            }
            else {
                 redu.push(now[j])
                let possi = skill.slice(0,skill.indexOf(now[j])+1)
                if(!redu.join("").includes(possi)){
                    cnt++
                    break;
                }
            }
        }
    }
    return skill_trees.length-cnt
}