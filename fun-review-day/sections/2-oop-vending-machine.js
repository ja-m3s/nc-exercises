"use strict";

class VendingMachine {
    credit;
    stock;

    constructor(){
        this.credit = 0;
        this.stock = {"A": {}, "B": {}, "C": {}};
    }

    addStock(product,row){
        this.stock[row] = product;
        
    }

    addCredit(credit){
        this.credit+= credit;
    }

    purchaseItem(row){
        if(this.stock[row].price <= this.credit){   
            this.stock[row].quantity--;
            this.credit-=this.stock[row].price;
            return this.stock[row].name;
        }
        
        return 'Insufficient credit!'
    }

}

module.exports = VendingMachine;
