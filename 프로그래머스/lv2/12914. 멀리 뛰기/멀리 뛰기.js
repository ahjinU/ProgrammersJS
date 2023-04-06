function solution(n) {
    let arr=new Array(n).fill(0);
    arr[1]=1
    arr[2]=2
    for(let i=3;i<=n;i++){
        arr[i]=(arr[i-1]+arr[i-2])%1234567
    }
    return arr[n]
}

// #include <string>
// #include <vector>

// using namespace std;

// long long solution(int n) {
//     long long answer = 0;
//    vector<int> dq;
//     dq.push_back(0);
//     dq.push_back(1);
//     dq.push_back(2);
//     for(int i=3;i<=n;i++){
//         dq.push_back((dq[i-1]+dq[i-2])%1234567);
//     }
//     return dq[n];
// }