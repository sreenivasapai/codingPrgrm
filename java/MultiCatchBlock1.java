public class MultiCatchBlock1{
    public static void main(String [] args){
        try{
            int a[] = new int[5];
            a[1]=10/0;
            a[10]=50;
        }
        catch(ArithmeticException e){
            System.out.println("arithamatic Exception occuers");}
            catch(ArrayIndexOutOfBoundsException e){
                System.out.println("ArrayIndexOutofBond exception occuers");}
                catch(Exception e){
                    System.out.println("parent exception occuers");}
                    System.out.println("restofcode....");
         }
    }
