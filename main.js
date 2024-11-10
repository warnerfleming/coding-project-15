// Task 4
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";

console.log("Original Portfolio Value:", calculatePortfolioValue());

try {
    const purchase = new Transaction(2, "buy", 3);
    console.log(`Purchased 3 units of ${purchase.asset.name}`);

    const sellTransaction = new Transaction(1, "sell", 1);
    console.log(`Sold 1 unit of ${sellTransaction.asset.name}`);

    console.log("Updated Portfolio Value:", calculatePortfolioValue());
} catch (error) {
    console.error("Error processing transaction:", error);
}
