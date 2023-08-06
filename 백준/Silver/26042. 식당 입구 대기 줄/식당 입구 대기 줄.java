import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Main {

	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static Deque<Integer> queue = new LinkedList<>();

	public static void main(String[] args) throws IOException {
		StringTokenizer st = new StringTokenizer(br.readLine());
		int tc = Integer.parseInt(st.nextToken()); // 수
		int maxLine = 0;
		int lastNum = 100001;

		for(int t=0;t<tc;t++) {
			 st = new StringTokenizer(br.readLine());
			 int n = Integer.parseInt(st.nextToken());
			 if(n==1) {
				 int m = Integer.parseInt(st.nextToken());
				 queue.add(m);
				 int size = queue.size();
				 int last = queue.peekLast();
				 
				 if(maxLine < size) {
					 maxLine = size;
					 lastNum = last;
				 }
				 else if(maxLine==size&&last<lastNum) {
					 lastNum = last;
				 }
			 }else {
				 queue.pollFirst();
			 }
			
		}
		
		System.out.println(maxLine + " "+lastNum);

	}
}
