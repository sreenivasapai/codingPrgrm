class SingleInheritence{
    int num1 = 10;
    int num2 = 5;
}
public class MainInheritence extends SingleInheritence{
    int num3 = 2; 

    public static void main(String[] args){
        MainInheritence obj = new MainInheritence();
        int sum = obj.num1 + obj.num2 + obj.num3;
        System.out.println("The sum is " + sum);
    }
}
