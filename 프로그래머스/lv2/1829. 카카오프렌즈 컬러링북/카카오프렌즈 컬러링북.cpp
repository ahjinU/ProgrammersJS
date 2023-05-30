#include<iostream>
#include <vector>
using namespace std;

vector<vector<int>> pic;
vector<vector<int>> ch;
int cnt, mm,nn;
int dx[4] = { 0,1,0,-1 };
int dy[4] = { 1,0,-1,0 };

int dfs(int x, int y) {
    ch[x][y] = 1;
    for (int i = 0; i < 4; i++) {
        int xx = x + dx[i];
        int yy = y + dy[i];
        if (xx >= 0 && yy >= 0 && xx < mm && yy < nn && pic[xx][yy] == pic[x][y]&& ch[xx][yy]==0) {
            cnt++;
            dfs(xx, yy);
        }
    }
    return cnt;
}


// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
vector<int> solution(int m, int n, vector<vector<int>> picture) {
    int number_of_area = 0;
    int max_size_of_one_area = 0;
    vector<vector<int>> v(m,vector<int>(n,0));
    
    ch=v;

    mm = m;
    nn = n;

    pic = picture;
    for (int i = 0; i < pic.size(); i++) {
        for (int j = 0; j < pic[0].size(); j++) {
            if (ch[i][j] == 0 && pic[i][j] != 0) {
                cnt = 1;
                max_size_of_one_area = max(dfs(i, j), max_size_of_one_area);
                number_of_area++;
            }
        }
    }

    vector<int> answer(2);
    answer[0] = number_of_area;
    answer[1] = max_size_of_one_area;
    return answer;
}