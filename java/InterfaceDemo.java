interface Animals {
    void sound();   // rule 1
    void move();    // rule 2
}
interface Car{
    void Start();
    void Stop();
}
class Ferrari implements Car {
    public void Start() {
        System.out.println("Engine Started");
    }
    public void Stop() {
        System.out.println("Engine Stopped");
    }
}

class Dogss implements Animals{
    public void sound(){
        System.out.println("Dog is barking");
    
    }
    public void move(){
        System.out.println("Dog is moving");
    }
}
class InterfaceDemo {
    public static void main(String[] args) {
        Animals myDog = new Dogss();
        Car myFerrari = new Ferrari();

        myDog.sound();
        myDog.move();


        myFerrari.Start();
        myFerrari.Stop();
    }
}