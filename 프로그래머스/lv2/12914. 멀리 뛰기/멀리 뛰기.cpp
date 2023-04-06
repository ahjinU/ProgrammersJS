#include <string>
#include <vector>

using namespace std;

long long solution(int n) {
    long long answer = 0;
   vector<int> dq;
    dq.push_back(0);
    dq.push_back(1);
    dq.push_back(2);
    for(int i=3;i<=n;i++){
        dq.push_back((dq[i-1]+dq[i-2])%1234567);
    }
    return dq[n];
}