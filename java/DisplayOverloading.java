//Methord Overloading

class DisplayOverloading{
    public void display(int a){
        System.out.println(a);
    }
    public void display(int a, int b){
        System.out.println(a+b);
    }
    class DisplayOverloadingTest{
        public static void main(String[]args){
            DisplayOverloading obj = new DisplayOverloading();
            obj.display(5);
            obj.display(10,15);
            
        }
    }
}