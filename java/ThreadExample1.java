//METHOD 1: Extending Thread Class
//Step 1: Extend Thread
//step 2: Override run()
//Step 3: Create object & call start()

class NewThread extends Thread{
    public void run(){
        for(int i=0; i<5;i++){
            System.out.println("value of i:"+i);
        } 
    }
}
public class ThreadExample1{
    public static void main(String[]args){
        NewThread t1 = new NewThread();
        t1.start();

    }
}