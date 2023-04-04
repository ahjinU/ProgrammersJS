#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int cnt=0;
   for(int i=1;i<=n;i++){
       if(n%i==0&&i%2==1) cnt++;
   }
    return cnt;
}