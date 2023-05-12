#include <iostream>
#include <stack>
#include <vector>
using namespace std;

int dp[10001];
int arr[10001];

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int answer = 0;


	int n, m;
	cin >> n >> m;

	for (int i = 0; i < n; i++) {
		int num;
		cin >> num;
		arr[i] = num;
	}

	int a = 0, b = 0;
	int sum = 0;
	while (b <= n) {
		if (sum == m) answer++;
		if (sum+arr[b] <= m) {
			sum += arr[b];
			b++;
		}
		else {
			a++;
			sum = arr[a];
			b = a + 1;
		}
	}

	cout << answer;
}