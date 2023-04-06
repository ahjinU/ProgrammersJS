function solution(k, tangerine) {
    let num =[]
    tangerine.forEach((e)=>{
        if(!(num[e])) num[e]=0;
        num[e]++;
    })
    num.sort((a,b)=>{ return a>b? -1: 1; })
    let i=0;
    let cnt=0;
    while(i<k){
        for(let j=0;j<num.length;j++){
           i+=num[j]
            cnt++
            if(i>=k) break;
        }
    }
    return cnt
}

/*
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int num[10000001];

int compare(int a, int b){
    return a>b;
}

int solution(int k, vector<int> tangerine) {
    int answer=0;
    sort(tangerine.begin(),tangerine.end(),compare);
    for(int i=0;i<tangerine.size();i++){
        num[tangerine[i]]++;
    }
    sort(num,num+tangerine[0]+1,compare);
    int s=0;
    int cnt=0;
    for(int i=0;i<tangerine[0]+1;i++){
        s+=num[i];
        cnt++;
        if(s>=k) break;
    }
    
    return cnt;
}*/