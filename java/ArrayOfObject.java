public class ArrayOfObject{
    public static void main(String[]args){
        product [] obj = new product[3];
        obj[0]=new product(101,"Laptop",55000);
        obj[1]=new product(102,"Tablet",25000);
        obj[2]=new product(103,"Mobile",15000);
        for(int i =0;i<obj.length;i++){
            System.out.println("Product ID: "+obj[i].pid);
            System.out.println("Product Name: "+obj[i].pname);
            System.out.println("Product Price: "+obj[i].rate);
            System.out.println("-----------------------");
        }

    }
    static class product{
        int pid;
        String pname;
        double rate;

        product(int pid,String pname,double rate){
            this.pid=pid;
            this.pname=pname;
            this.rate=rate;
        
        
        }
        public void display(){
            System.out.println(pid+" "+pname+" "+rate);
        }
    }
}