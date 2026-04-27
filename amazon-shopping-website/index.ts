class Customer{
    cart:ShoppingCart;
    searchObj:Search;
    customerId:number;
    constructor(cart:ShoppingCart,searchObj:Search,customerId:number){
        this.cart=cart;
        this.searchObj=searchObj;
        this.customerId=customerId;
    }
    getShoppingCart(customerId:number):ShoppingCart{
    }
    addItemToShoppingCart(item:Item):void{
    }
    removeItemFromShoppingCart(item:Item):void{
    }
    updateItemFromShoppingCart(item:Item):void{
    }
}

class Guest extends Customer{
    creatNewAccount():void{
    }
}

class User extends Customer{
    account: Account;
    constructor(account:Account,cart:ShoppingCart,searchObj:Search,customerId:number){
        super(cart,searchObj,customerId);
        this.account=account;
    }
}

class Seller extends User{
    addProduct(item:Item):void{
    
}

class Buyer extends User{
    orderObj:Order;
    constructor(account:Account,cart:ShoppingCart,searchObj:Search,customerId:number,orderObj:Order){
        super(account,cart,searchObj,customerId);
        this.orderObj=orderObj;
    }
    placeOrder(cart:ShoppingCart):OrderStatus{
    }
    addReview(review:ProductReview):void{
    }
}