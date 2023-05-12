#include <iostream>
#include <stack>
#include <vector>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	vector<char> answer;
	stack<int> st; //
	vector<int> target; //목표 배열
	int ind = 0; //목표 인덱스

	int T;
	cin >> T;
	for (int i = 0; i < T; i++) {
		int num;
		cin >> num;
		target.push_back(num);
	}

	for (int i = 1; i <= T; i++) {
		if (target[ind] != i) {
			st.push(i);
			answer.push_back('+');
		}
		else {
			st.push(i);
			answer.push_back('+');
			while(!st.empty()&&st.top()==target[ind]) {
				st.pop();
				answer.push_back('-');
				ind++;
			}
		}
	}

	if (!st.empty()) {
		cout << "NO";
		return 0;
	}
	
	for (int i = 0; i < answer.size(); i++) {
		cout << answer[i] << "\n";
	}

	return 0;
}