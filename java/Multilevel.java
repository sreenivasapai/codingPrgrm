class WorkerDetail {
    int code;
    String name;
    double salary;
    double hra;

    void setSalary(int c, String n, double s) {
        code = c;
        name = n;
        salary = s;
    }

    void showDetails() {
        System.out.println("Worker code: " + code);
        System.out.println("Worker name: " + name);
        System.out.println("Worker salary: " + salary);
    }

    void getHra() {
        hra = salary * 0.60;
        System.out.println("HRA is: " + hra);
    }
}

// 1st Level Inheritance
class OfficerSal extends WorkerDetail {
    double da;

    void getDa() {
        da = salary * 0.98;
        System.out.println("DA is: " + da);
    }
}

// 2nd Level Inheritance (Multilevel)
class ManagerSal extends OfficerSal {
    double ca, gross;

    void getCa() {
        ca = salary * 0.20;
        System.out.println("CA is: " + ca);
    }

    void getGross() {
        gross = salary + hra + da + ca;
        System.out.println("Gross salary is: " + gross);
    }
}

public class Multilevel {
    public static void main(String[] args) {
        ManagerSal ms = new ManagerSal();
        ms.setSalary(101, "John", 50000);

        ms.showDetails();
        ms.getHra();
        ms.getDa();
        ms.getCa();
        ms.getGross();
    }
}