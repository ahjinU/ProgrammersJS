#include <stdio.h>
#include <iostream>
#include <string>
#include <stack>
using namespace std;

int n, x,cnt;
string res[1001];

int num[26];


int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	stack<int> S;

	int n;
	cin >> n;
	while (n--) {
		string c;
		cin >> c;
		if (c == "push") {
			int a;
			cin >> a;
			S.push(a);
		}
		else if (c == "pop") {
			if (S.empty()) cout << -1 << "\n";
			else {
				cout << S.top() << "\n";
				S.pop();
			}
		}
		else if (c == "size") cout << S.size() << "\n";
		else if (c == "empty") cout << (int)S.empty() << "\n";
		else {
			if (S.empty()) cout << -1 << "\n";
			else 
				cout << S.top() << "\n";
		}
	}


	
}

