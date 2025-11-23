class Fruit {
    void fruitInfo() {
        System.out.println("I am a fruit.");
    }
}

// class 'Mango' inherits from class 'Fruit'
class Mango extends Fruit {
    public void mangoInfo() {
        fruitInfo(); // calling base class function
        System.out.println("My name is mango.");
    }
}

// class 'Apple' inherits from class 'Fruit'
class Apple extends Fruit {
    public void appleInfo() {
        fruitInfo(); // calling base class function
        System.out.println("My name is apple.");
    }
}

public class HierarchicalInheritanceDemo {
    public static void main(String args[]) {
        Mango m = new Mango();
        Apple a = new Apple();
        m.mangoInfo();
        a.appleInfo();
    }
}
