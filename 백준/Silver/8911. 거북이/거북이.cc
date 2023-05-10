#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int dx[4] = { 0,-1,0,1 };
int dy[4] = { 1,0,-1,0 };


int main(void) {
	int T;
	cin >> T;
	vector<int> answer;
	for (int i = 0; i < T; i++) {
		int cx = 0, cy = 0, dir = 0;
		int minx = 0, maxx = 0;
		int miny = 0, maxy = 0;

		string s;
		cin >> s;
		for (int j = 0; j < s.size(); j++) {
			if (s[j] == 'F') {
				cx += dx[dir]; //다음 위치
				cy += dy[dir];
			}
			else if (s[j] == 'L') {
				dir = (dir + 1) % 4;
			}
			else if (s[j] == 'R') {
				if (dir - 1 < 0) dir += 4;
				dir = (dir - 1) % 4;
			}
			else {
				cx -= dx[dir];
				cy -= dy[dir];
			}
			if (cx < minx) minx = cx;
			else if (cx > maxx) maxx = cx;
			if (cy < miny) miny = cy;
			else if (cy > maxy) maxy = cy;
		}
		answer.push_back((maxx - minx)*(maxy - miny));
	}

	for (int i = 0; i < answer.size(); i++) {
		cout << answer[i] << "\n";
	}

	return 0;
}