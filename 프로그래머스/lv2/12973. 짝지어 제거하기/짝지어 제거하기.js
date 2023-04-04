function solution(s)
{
    let stack=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==stack[stack.length-1]) stack.pop()
        else stack.push(s[i])
    }
    return stack.length>0? 0: 1;
}

// #include <iostream>
// #include <vector>
// #include<string>
// using namespace std;

// int solution(string s)
// {
//     vector<char> st;
    
//     for(int i=0;i<s.length();i++){
//         if(!st.empty()&&s[i]==st[st.size()-1]) st.pop_back();
//         else st.push_back(s[i]);
//     }
    
//     return st.empty()? 1: 0;
// }