public class Product implements Comparable<Product>{
    private String productID;
    private String productName;
    private double price;
    private String category;

    public Product(String productID, String productName, double price, String category){
        this.productID = productID;
        this.productName = productName;
        this.price = price;
        this.category = category;
    }

    public String getProductID() {
        return productID;
    }
    public String getProductName() {
        return productName;
    }
    public double getPrice() {
        return price; 
    }

    @Override
    public int compareTo(Product other) {
        return this.productID.compareTo(other.productID);
    }
    @Override
    public String toString() {
        return "Product ID: " + productID + ", Name: " + productName + ", Price: " + price + ", Category: " + category;
    }
}