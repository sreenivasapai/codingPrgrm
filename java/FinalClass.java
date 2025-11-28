final class FinalClass{/* cannot be extended */}

class FinalDemo{
    final int MAX = 100;
    final void show(){
        System.out.println("Show");
    }

    public static void main(String []args){
        FinalDemo obj = new FinalDemo();
        obj.show();
    }
}