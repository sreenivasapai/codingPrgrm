interface Flyable {
    void flyObj();
}

class Spacecraft implements Flyable {
    public void flyObj() {
        System.out.println("Spacecraft is flying");
    }
}

class Airplane implements Flyable {
    public void flyObj() {
        System.out.println("Airplane is flying");
    }
}

class Helicopter implements Flyable {
    public void flyObj() {
        System.out.println("Helicopter is flying");
    }
}

class TestFly {
    public static void main(String[] args) {
        Flyable[] f = new Flyable[3];  // create array

        f[0] = new Spacecraft();       // assign separately
        f[1] = new Airplane();
        f[2] = new Helicopter();

        for (Flyable obj : f) {
            obj.flyObj();
        }
    }
}
