public class SearchUtil{
    public static Product LinearSearch(Product[] products, String targetID){
        for(Product product : products){
            if(product.getProductID().equals(targetID)){
                return product;
            }
        }
        return null;
    }
    public static Product BinarySearch(Product[] products, String targetID){
        int left = 0;
        int right = products.length - 1;
        while(left <= right){
            int mid = left + (right - left) /2;
            if(products[mid].getProductID().equals(targetID)){
                return products[mid];
            }
            if(products[mid].getProductID().compareTo(targetID) < 0){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}