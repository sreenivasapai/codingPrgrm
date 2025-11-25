public class SumAvg{
    public static void main(String [] args){
        if(args.length == 0){
            System.out.println("usage : java sumavg n1  n2 ....");
            return;
        }
        double sum =0;
        for(String s : args){
            sum += Double.parseDouble(s);
            double avg = sum/args.length;
            System.out.println("sum = " + sum);
            System.out.println("avg = " + avg);

        }
    }
}