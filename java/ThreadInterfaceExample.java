//METHOD 2: Implementing Runnable Interface
//Step 1: Create class & implement Runnable
//Step 2: Override run()
//Step 3: Pass object to Thread class
//Step 4: Call start()

class NewThread implements Runnable {
    public void run(){
        for (int i=0;i<5;i++){
            System.out.println("value of i:"+i);
        }
    }
}
public class ThreadInterfaceExample{
    public static void main(String[]args){
        NewThread nt = new NewThread();
        Thread t = new Thread(nt);
        t.start();
    }
}