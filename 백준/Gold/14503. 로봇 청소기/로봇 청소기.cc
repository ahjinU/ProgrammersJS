#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int map[51][51];
int dx[4] = { 0,1,0,-1 }; //북동남서
int dy[4] = { -1,0,1,0 };
int n, m; //세로, 가로
vector<int> answer;

int min = -1;

int dfs(int x, int y, int cnt, int dir) {
	if (answer.size() > 0) return answer[0];
	//cout << x << y<<dir<<"\n";
	if (map[y][x] == 0) {
		map[y][x] = 2;
		cnt++;
	}

	int ch=0;
	for(int i = 0; i < 4; i++) {
		int xx = x + dx[i];
		int yy = y + dy[i];
		if (xx < 0 || yy < 0 || xx >= m || yy >= n || map[yy][xx] != 0) continue;
		else ch = 1;
	}

	if (ch == 0){ //빈칸이 없는 경우
		int xx = x - dx[dir];
		int yy = y - dy[dir];
		if (xx < 0 || yy < 0 || xx >= m || yy >= n || map[yy][xx] == 1) {
			answer.push_back(cnt);
			return answer[0]; //멈춘다
		}
		else {
			dfs(xx, yy, cnt, dir);
		}
	}
	else {
		for (int i = 0; i < 4; i++) {
			if (dir - 1 < 0) dir += 4;
			dir -= 1;//회전
			int xx = x + dx[dir];
			int yy = y + dy[dir];
			if (xx < 0 || yy < 0 || xx >= m || yy >= n || map[yy][xx] != 0) continue;
			else {
				dfs(xx, yy, cnt, dir);
			}
		}
	}
	return answer[0];

}

int main()
{

	cin >> n >> m; //크기
	int sx, sy, d; //출발,방향
	cin >> sy >> sx>>d;

	//cout << sx << sy;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> map[i][j];
		}
	}



	cout<<dfs(sx, sy, 0, d);

	return 0;
}