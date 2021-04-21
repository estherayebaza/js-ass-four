class KioskCalc {
    constructor(fruit, quantity) {
        this.fruit = "orange";
        this.quantity = 2;
        this.fruit2 = "mango"
        this.quantity2 = 2;
        this.fruit3 = "avocado"
        this.quantity3 = 3;
    }
    getTotalCost1() {
        return `${this.quantity} ${this.fruit} for KES ${30*this.quantity}`;
    }
    getTotalCost2() {
        return `${this.quantity2} ${this.fruit2} for KES ${15*this.quantity2}`;
    }
    getTotalCost3() {
        return `${this.quantity3} ${this.fruit3} for KES ${40*this.quantity3}`;
    }
}
var kioskCalc = new KioskCalc("orange", 2)
console.log(kioskCalc.getTotalCost1());
var kioskCalc = new KioskCalc("mango", 2)
console.log(kioskCalc.getTotalCost2());
var kioskCalc = new KioskCalc("avocado", 3)
console.log(kioskCalc.getTotalCost3());