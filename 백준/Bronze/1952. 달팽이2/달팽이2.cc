#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    int cnt = n * m;

    int st = 0;
    int num = 0;
    int mst = 0;
    int answer = 0;
    while (num != cnt) {
        if (st == 0) {
            num += m;
            m--;
            st = 1;
        }
        else {
            num += n - 1;
            n--;
            st = 0;
        }
        answer++;
    }

    cout << answer-1;

    return 0;
}