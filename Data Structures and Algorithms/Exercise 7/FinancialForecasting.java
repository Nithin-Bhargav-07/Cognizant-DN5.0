public class FinancialForecasting{
    public static double calculateFutureValue(double presentValue, double growthRate, int years){
        if(years == 0){
            return presentValue;
        }
        return calculateFutureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }
    public static void main(String[] args){
        double presentValue = 10000.00;
        double expectedGrowthRate = 0.05; // 5% growth rate
        int yearsToPredict = 10;

        System.out.println("Starting Value: $" + presentValue);
        System.out.println("Expected Growth Rate: " + (expectedGrowthRate * 100) + "%");

        double futureValue = calculateFutureValue(presentValue, expectedGrowthRate, yearsToPredict);
        System.out.printf("Predicted value in %d years: $%.2f\n", yearsToPredict, futureValue);
    }
}