/* Abstract class & methods program */

abstract class Vehicle1 {
    abstract void startEngine();
    abstract void stopEngine();
}

class Cars extends Vehicle1 {
    void startEngine() {
        System.out.println("Car engine started");
    }

    void stopEngine() {
        System.out.println("Car engine stopped");
    }
}

class Bike extends Vehicle1 {
    void startEngine() {
        System.out.println("Bike engine started");
    }

    void stopEngine() {
        System.out.println("Bike engine stopped");
    }
}

public class TestVehicle {
    public static void main(String[] args) {
        Vehicle1 v1 = new Cars();
        Vehicle1 v2 = new Bike();

        v1.startEngine();
        v1.stopEngine();
        v2.startEngine();
        v2.stopEngine();
    }
}
