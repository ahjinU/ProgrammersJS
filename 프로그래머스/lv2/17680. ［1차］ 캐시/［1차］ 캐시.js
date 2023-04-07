function solution(cacheSize, cities) {
    let answer =0;
    let cash =[];
    let num=0;
     for(let i=0;i<cities.length;i++){
        cities[i]=cities[i].toUpperCase()
    }
    for(let i=0;i<cities.length;i++){
        if(cash.includes(cities[i])) {
            cash.splice(cash.indexOf(cities[i]),1)
            cash.push(cities[i])
            answer+=1;
            continue;
        }
        else answer+=5;
        cash.push(cities[i])
        num++;
        if(num==cacheSize+1) {
            cash.shift(cash[0])
            num--;
        }
    }
    return answer;
}
/*
#include <string>
#include <vector>
#include <stack>
#include <algorithm>
#include <iostream>


using namespace std;

int solution(int cacheSize, vector<string> cities) {
   int answer=0;
    deque<string> cache;
    for(int i=0;i<cities.size();i++){
        string city= cities[i];
        for(int j=0;j<city.length();j++){
            city[j]=tolower(city[j]);
        }
        bool hit = false;
        int index=0;
        for(index=0;index<cache.size();index++){
            if(cache[index]==city){
                hit = true;
                break;
            }
        }
        cache.push_back(city);
        if(hit){
            cache.erase(cache.begin()+index);
            answer+=1;
        }
        else{
            if(cache.size()>cacheSize){
                cache.pop_front();
            }
            answer+=5;
        }
    }
    return answer;
}*/