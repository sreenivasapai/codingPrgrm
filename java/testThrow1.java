public class testThrow1 {
    public static void validate(int age) {
        if (age < 18) {
            throw new ArithmeticException("Person is not eligible to vote");
        } else {
            System.out.println("person is eligible to vote!!");
        }
    }

    public static void main(String[] args) {
        try {
            validate(19 );
        } catch (ArithmeticException e) {
            System.out.println("hi");
        }
        System.out.println("rest of the code...");
    }
}