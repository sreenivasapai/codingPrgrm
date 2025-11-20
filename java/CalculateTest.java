class Calculate{
    void Sum(int a,int b){
        System.out.println("sum is "+(a+b));
    }
    void Sum(double a, double b){
        System.out.println("Sum is "+(a+b));

    }
}
class CalculateTest{
    public static void main(String [] args){
        Calculate obj = new Calculate();
        obj.Sum(5,10);
        obj.Sum(5.6,4.1);
        
    }
}