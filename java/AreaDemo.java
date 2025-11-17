class Area{
    void find(int l,int b){
        System.out.println("area is : "+(l*b));
    }
    void find(int l,int b,int h){
        System.out.println("area is "+(l*b*h));
    }
}
    class AreaDemo{
        public static void main(String[]args){
            Area ar = new Area();
            ar.find(5,5);
            ar.find(2,2,2);
            
        }
    }
