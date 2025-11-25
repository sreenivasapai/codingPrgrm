//constructor overloading using java
public class OverloadDemo {
    int x,y;
    OverloadDemo(){
        x=0;
        y=0;}
        OverloadDemo(int x){
        this.x=x;
         y=0;}
         OverloadDemo(int x,int y){
            this.x=x;
            this.y=y;}
            void show(){
                System.out.println(x+" "+y);}
public static void main(String[]args){
    OverloadDemo ob1 = new OverloadDemo();
    OverloadDemo ob2 = new OverloadDemo(10);
    OverloadDemo ob3 = new OverloadDemo(10,20);

    ob1.show();
    ob2.show();
    ob3.show();

}
}