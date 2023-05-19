#include <iostream>
#include <cmath>
#include<vector>
using namespace std;

int n;
int cal[4];
int map[11];
int maxA = -1000000001;
int minA = 1000000001;

void dfs(int i, int result) {
	if (i == n) {
		if (result < minA) minA = result;
		if (result > maxA) maxA = result;
		return;
	}
	for (int j = 0; j < 4; j++) {
		if (cal[j] > 0) {
			cal[j] -= 1;
			if (j == 0) {
				dfs(i + 1, result + map[i]);
			}
			else if (j == 1) {
				dfs(i + 1, result - map[i]);
			}
			else if (j == 2) {
				dfs(i + 1, result * map[i]);
			}
			else if (j == 3) {
				dfs(i + 1, result / map[i]);
			}
			cal[j]++;
		}
	}
	return;
}

int main() {
	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> map[i];
	}
	for (int i = 0; i < 4; i++) {
		cin >> cal[i];
	}

	dfs(1, map[0]);

	cout << maxA << "\n" << minA;

	return 0;

}