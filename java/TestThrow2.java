public class TestThrow2{
    public static void validate(int age){
        if(age<18){
            throw new ArithmeticException("not eligible to vote");
        }else{
            System.out.println("Eligible to vote ");

        }
    }
    public static void main(String[]args){
        validate(19);

        System.out.println("rest of the code ...");
    }
}