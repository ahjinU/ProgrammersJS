import java.io.*;
import java.util.StringTokenizer;

public class Main {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static StringBuilder sb = new StringBuilder();

	public static void main(String[] args) throws IOException {
		StringTokenizer st = new StringTokenizer(br.readLine());

		int n = Integer.parseInt(st.nextToken());

		int[][] arr = new int[n][n];

		int m = Integer.parseInt(st.nextToken());

		for (int i = 0; i < n; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < n; j++) {
				int num = Integer.parseInt(st.nextToken());
				int sum = 0;
				if(i-1>=0) {
					sum+=arr[i-1][j];
				}
				if(j-1>=0) {
					sum+=arr[i][j-1];
				}
				if(j-1>=0&&i-1>=0) {
					sum-=arr[i-1][j-1];
				}
				sum+=num;
				arr[i][j]=sum;
			}
		}
		
		for(int i=0;i<m;i++) {
			st = new StringTokenizer(br.readLine());
			
			int x1, y1, x2, y2;
			x1 = Integer.parseInt(st.nextToken())-1;
			y1 = Integer.parseInt(st.nextToken())-1;
			x2 = Integer.parseInt(st.nextToken())-1;
			y2 = Integer.parseInt(st.nextToken())-1;
			
			int result = 0;
			result = arr[x2][y2];
			
			if(x1-1>=0&&y1-1>=0) {
				result = result - arr[x2][y1-1] - arr[x1-1][y2];
				result += arr[x1-1][y1-1];
			}
			
			else if(x1-1>=0) {
				result -=arr[x1-1][y2];
			}
			else if(y1-1>=0) {
				result-=arr[x2][y1-1];
			}

			sb.append(result).append("\n");
			
		}
		
		System.out.println(sb);

	}
}