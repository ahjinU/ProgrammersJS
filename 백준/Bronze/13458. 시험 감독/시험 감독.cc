#include <iostream>
#include <cmath>
#include<vector>
using namespace std;
vector<int> stu;

int main() {
	int N, B, C;
	long long answer=0;
	cin >> N;
	for (int i = 0; i < N; i++) {
		int num;
		cin >> num;
		stu.push_back(num);
	}
	cin >> B >> C;
	for (int i = 0; i < N; i++) {
		if (stu[i] > B) {
			answer += ceil((stu[i] - B) / double(C));
		}
		answer += 1;
	}
	cout << answer;
	return 0;

}