#include <string>
#include <vector>
#include <stack>
#include <iostream>

using namespace std;

int solution(string s) {
    if(s.length()%2!=0) return 0;
    int answer=0;
    for(int i=0;i<s.length();i++){
        stack<char> st;
        bool ch = true;
        for(int j=0;j<s.length();j++){
            if(s[j]=='('||s[j]=='{'||s[j]=='[') st.push(s[j]);
            else{
                char ts = st.top();
                st.pop();
                if(s[j]==')'&&ts=='(') continue;
                if(s[j]==']'&&ts=='[') continue;
                if(s[j]=='}'&&ts=='{') continue;
                else {
                    ch = false;
                    break;
                }
            }
        }
        if(ch) answer++;
        
        char sfir = s.front();
        s.erase(s.begin());
        s.push_back(sfir);
    }
    return answer;
}