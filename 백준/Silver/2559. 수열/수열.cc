#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int arr[100001];
int dp[100001];
vector<int> q;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int n, m;
	cin >> n >> m;
	int answer = -10000001;

	for (int i = 0; i < n; i++) {
		cin>>arr[i];
	}

	int sum = 0;
	for (int i = 0; i < m; i++) {
		sum += arr[i];
	}
	answer = max(sum, answer);

	int a=0, b=m;
	while (b!=n) {
		sum = sum + arr[b] - arr[a];
		b++;
		a++;
		answer = max(sum, answer);
	}

	cout << answer;

	return 0;

}