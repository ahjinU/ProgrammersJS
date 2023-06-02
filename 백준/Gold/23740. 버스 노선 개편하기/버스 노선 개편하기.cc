#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	int k;
	vector < pair<pair<int, int>, int>> v;
	vector < pair<pair<int, int>, int>> v2;
	cin >> k;
	for (int i = 0; i < k; i++) {
		int a, b, c;
		cin >> a >> b >> c;
		v.push_back(make_pair(make_pair(a, b), c));
	}
	sort(v.begin(), v.end());

	for (int i = 0; i < k; i++) {
		int s = v[i].first.first, e = v[i].first.second, c = v[i].second;
		while (i < k - 1 && v[i + 1].first.first <= e) {
			e = max(e, v[i + 1].first.second);
			s = min(s, v[i + 1].first.first);
			c = min(c, v[i + 1].second);
			i++;
		}
		v2.push_back(make_pair(make_pair(s, e), c));
	}

	cout << v2.size() << "\n";
	for (int i = 0; i < v2.size(); i++) {
		cout << v2[i].first.first << " " << v2[i].first.second << " " << v2[i].second << "\n";
	}
	return 0;

}