#include <iostream>
using namespace std;

int solution(int n)
{
    int m = n;
    if(n%2!=0) n-=1;
    int ans = 0;
    while(n!=0){
        while(n%2==0){
            n/=2;
        }
        n-=1;
        ans++;
    }

    return (m%2==1)? ans+1: ans;
}