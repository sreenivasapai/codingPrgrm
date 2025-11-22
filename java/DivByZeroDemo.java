public class DivByZeroDemo {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            int c = a / b;                  // causes ArithmeticException
            System.out.println("c = " + c);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide : " + e.getMessage());
        }
        System.out.println("Program continues...");
    }
}
