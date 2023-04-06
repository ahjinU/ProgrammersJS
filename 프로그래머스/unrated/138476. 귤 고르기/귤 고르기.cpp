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
    while(s<k){
        for(int i=0;i<tangerine[0]+1;i++){
            s+=num[i];
            cnt++;
            if(s>=k) break;
        }
    }
    
    return cnt;
}