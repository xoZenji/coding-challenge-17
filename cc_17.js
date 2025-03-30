// Task 1: Created Customer Class
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
}; // Created the customer class

const customer01 = new Customer("Yoda", "iamgreen@jedisrock.com");
customer01.addPurchase(345);
customer01.addPurchase(273);
customer01.getTotalSpent(); // Returns the total amount spent by the customer
console.log(`${customer01.name} spent this much oh his new walking stick: $${customer01.getTotalSpent()}`);

// Task 2: Created SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name
        this.clients = [];
    }

    addClient(customer) {
        this.clients.push(customer);
    }
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        if (client) {
            return client.getTotalSpent();
        } else {
            return `Client ${name} cannot be found.`;
        }
    }
}

const salesRep = new SalesRep("Obi Wan Kenobi");
salesRep.addClient(customer01);
salesRep.getClientTotal("Yoda"); // Returns the total amount spent by the client