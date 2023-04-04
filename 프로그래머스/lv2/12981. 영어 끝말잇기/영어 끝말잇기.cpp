#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

vector<int> solution(int n, vector<string> words) {
    vector<int> answer;
    vector<string> ald;
    
    ald.push_back(words[0]);
    for(int i=1;i<words.size();i++){
        auto it = find(ald.begin(),ald.end(),words[i]);
        if(words[i-1][words[i-1].size()-1]!=words[i][0]||
           it!=ald.end()){
            if((i+1)%n==0){
                answer.push_back(n);
                answer.push_back((i+1)/n);
                return answer;
            }else{
                answer.push_back((i+1)%n);
                answer.push_back((i+1)/n+1);
                return answer;
            }
        }
        ald.push_back(words[i]);
        
    }
     answer.push_back(0);
    answer.push_back(0);
    
    return answer;
}