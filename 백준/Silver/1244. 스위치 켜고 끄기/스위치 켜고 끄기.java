
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

	public static void main(String[] args) throws IOException {
		StringTokenizer st = new StringTokenizer(br.readLine());
		int num = Integer.parseInt(st.nextToken())+1;
		
		int[] arr = new int[num];
		
		st = new StringTokenizer(br.readLine());
		for(int i=1;i<num;i++) {
			arr[i]=Integer.parseInt(st.nextToken());
		}
		
		st = new StringTokenizer(br.readLine());
		int stu = Integer.parseInt(st.nextToken());
		
		for(int i=0;i<stu;i++) {
			st = new StringTokenizer(br.readLine());
			int GoB = Integer.parseInt(st.nextToken()); //성별
			int ind = Integer.parseInt(st.nextToken()) ; //스위치
			
			if(GoB==1) {
				for(int j=ind;j<num;j+=ind) {
						arr[j]= arr[j]==0? 1: 0; 
				}
			}
			
			else {
				int ft = ind -1;
				int end  = ind +1;
				
				while(true) {
					if(ft<1||end>=num) break;
					if(arr[ft]!=arr[end]) break;
					end++;
					ft--;
				}
				
				for(int j=ft+1;j<=end-1;j++) {
					arr[j]= arr[j]==0? 1: 0;
				}
			}
			
			
		}
		
		
		
		for(int j=1;j<num;j++) {
			System.out.print(arr[j]+" ");
			if(j%20==0) System.out.println();
		}
		
		return;
	}

}
