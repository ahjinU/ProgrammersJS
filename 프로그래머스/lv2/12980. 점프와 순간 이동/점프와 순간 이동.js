function solution(n)
{
    let m = n;
    if(n%2!=0) n=n-1;
    let cnt=0;
    while(n!=0){
        while(n%2==0){
        n=n/2;
        }
        n-=1;
        cnt++;
    }
    
    return m%2==0? cnt: cnt+1;
    
}