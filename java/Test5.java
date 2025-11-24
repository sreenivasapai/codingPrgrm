class Employee {
    int empno;
    String empname;

    Employee(int no, String name) {
        empno = no;
        empname = name;
    }

    void calculateSalary() {
        System.out.println("General salary calculation");
    }
}

class FullTimeEmployee extends Employee {
    double basic, hra, da;

    FullTimeEmployee(int no, String name, double b, double h, double d) {
        super(no, name);
        basic = b; hra = h; da = d;
    }

    @Override
    void calculateSalary() {
        double gross = basic + hra + da;
        System.out.println("Gross Salary for " + empname + ": " + gross);
    }
}

public class Test5{
    public static void main(String[] args) {
        Employee e = new FullTimeEmployee(1, "Sreenivasa", 30000, 5000, 2000);
        e.calculateSalary();  // dynamic polymorphism
    }
}
