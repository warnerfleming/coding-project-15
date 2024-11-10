// Task 3
export class Transaction {
    constructor(assetId, type, quantity) {
        this.type = type;
        this.quantity = quantity;
        this.asset = getAssetById(assetId);
        
        this.inputTransaction();
    }

    inputTransaction() {
        if (this.type === "buy") {
            this.asset.quantity += this.quantity;
        } else if (this.type === "sell") {
            if (this.asset.quantity < this.quantity) {
                throw new Error(`Not enough quantity for ${this.asset.name}`);
            }
            this.asset.quantity -= this.quantity;
    }}
}

