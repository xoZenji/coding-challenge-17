class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    };

    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
};

const customer01 = new Customer("Yoda", "iamgreen@jedisrock.com");
customer01.addPurchase(345);
customer01.addPurchase(273);
customer01.getTotalSpent();
console.log(`${customer01.name} spent this much on the transaction: $${customer01.getTotalSpent()}`);
