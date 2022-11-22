class User {
    constructor(name, age, amount) {
        this.name = name;
        this.age = age;
        this.amount = amount;
        this.cart = [];
    }

    async addProductToCart(product, price) {
        this.cart.push({
            product: product,
            price: price
        })
    }

    async logCart() {
        console.info(`${this.name} cart:`)
        for (let i = 0; i < this.cart.length; i++) {
            console.log(this.cart[i])
        }
    }

    async buyCart() {
        let new_cart = [];
        for (let i = 0; i < this.cart.length; i++) {
            this.amount -= this.cart[i].price
            new_cart.push(this.cart[i])
            if (this.amount < 0) {
                this.amount += this.cart[i].price
                new_cart.pop()
                console.log('Not enough money')
                break
            } else {
                console.log(`Bought ${this.cart[i].product} for ${this.cart[i].price}`)
            }
        }
        this.cart = new_cart

    }

}


const listOfUsers = [new User('Vasya', 20, 100),
    new User('Petya', 30, 200),
    new User('Kolya', 40, 300),
    new User('Olya', 50, 400)
]

async function userFlow() {
    for (let i = 0; i < listOfUsers.length; i++) {
        console.log(listOfUsers[i])
        await listOfUsers[i].addProductToCart('product', Math.floor(Math.random() * 100))
        await listOfUsers[i].logCart()
        await listOfUsers[i].buyCart()
        await listOfUsers[i].logCart()
    }
}

userFlow()
