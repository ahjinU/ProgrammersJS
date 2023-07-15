
import javax.swing.plaf.synth.SynthOptionPaneUI;
import java.util.Scanner;
import java.util.Arrays;
import java.util.*;

public class Main {
    public static void main(String[] args) {

        Map<Integer,String> map = new HashMap<>();

        Scanner sc = new Scanner(System.in);
        int[] years = new int[3];

       for(int i=0;i<3;i++){
           int cnt = sc.nextInt();
           int year = sc.nextInt();
           years[i]=year%100;
           String name = sc.next();
           map.put(cnt,name.substring(0,1));
       }

       List<Integer> keySet = new ArrayList<>(map.keySet());
       Collections.sort(keySet);
       Collections.reverse(keySet);

       Arrays.sort(years);

       for(Integer year : years){
           System.out.print(year);
       }
       System.out.println();
       for(Integer key : keySet){
           System.out.print(map.get(key));
       }


    }

}