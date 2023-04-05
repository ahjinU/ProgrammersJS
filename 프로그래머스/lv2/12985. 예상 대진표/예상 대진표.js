function solution(n,a,b) {
    let answer = 0;
    
    while(a !== b) {
        a = Math.ceil(a/2);
        console.log(a)
        b = Math.ceil(b/2);
        console.log(b)
        answer++;
    }

    return answer;
}

// #include <iostream>
// #include <cmath>

// using namespace std;

// int solution(int n, int a, int b)
// {
//     int answer = 0;

//     while(a!=b){
//         answer++;
//         a= ceil(a/float(2));
//         b=ceil(b/float(2));
//     }

//     return answer;
// }