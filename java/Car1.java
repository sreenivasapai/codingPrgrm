class Vehicle{
    String vehicleType;
}
public class Car1 extends Vehicle{
    String modelType;
    public void showDetatil(){
        vehicleType="Ferrari";
        modelType="2024";
        System.out.println("vehicle Type:"+vehicleType);
        System.out.println("model Type:"+modelType);
    
    }
    public static void main(String[]args){
        Car1 obj = new Car1();
        obj.showDetatil();
    }

}