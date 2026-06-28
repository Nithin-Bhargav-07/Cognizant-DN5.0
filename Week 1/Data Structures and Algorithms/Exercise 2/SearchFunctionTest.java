import java.util.Arrays;

public class SearchFunctionTest {
    public static void main(String[] args){
        Product[] inventory = {
            new Product("P001", "Laptop", 1200.00, "Electronics"),
            new Product("P002", "Smartphone", 800.00, "Electronics"),
            new Product("P003", "Tablet", 400.00, "Electronics"),
            new Product("P004", "Monitor", 300.00, "Electronics"),
            new Product("P005", "Keyboard", 50.00, "Electronics")
        };

        String targetID = "P003";

        System.out.println("Performing Linear Search for Product ID: " + targetID);
        Product linearSearchResult = SearchUtil.LinearSearch(inventory, targetID);
        if (linearSearchResult != null) {
            System.out.println("Product found: " + linearSearchResult.getProductName() + ")");
        } else {
            System.out.println("Product not found.");
        }
        Arrays.sort(inventory);
        System.out.println("\nPerforming Binary Search for Product ID: " + targetID);
        Product binarySearchResult = SearchUtil.BinarySearch(inventory, targetID);
        if (binarySearchResult != null) {
            System.out.println("Product found: " + binarySearchResult.getProductName() + ")");
        } else {
            System.out.println("Product not found.");   
        }    
    }
}