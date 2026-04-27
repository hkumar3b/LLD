
class Customer {
    cart: ShoppingCart;
    searchObj: Search;
    customerId: number;

    constructor(cart: ShoppingCart, searchObj: Search, customerId: number) {
        this.cart = cart;
        this.searchObj = searchObj;
        this.customerId = customerId;
    }

    getShoppingCart(customerId: number): ShoppingCart {
        // Implementation
        return this.cart;
    }
    addItemsToShoppingCart(item: Item): void {
        // Implementation
    }
    updateItemFromShoppingCart(item: Item): void {
        // Implementation
    }
    removeItemFromShoppingCart(item: Item): void {
        // Implementation
    }
}

class Guest extends Customer {
    constructor(cart: ShoppingCart, searchObj: Search, customerId: number) {
        super(cart, searchObj, customerId);
    }
    createNewAccount(): Account {
        // Implementation
        return new Account("", "", "", "", [], AccountStatus.ACTVE);
    }
}

class User extends Customer {
    account: Account;

    constructor(account: Account, cart: ShoppingCart, searchObj: Search, customerId: number) {
        super(cart, searchObj, customerId);
        this.account = account;
    }
}

class Seller extends User {
    constructor(account: Account, cart: ShoppingCart, searchObj: Search, customerId: number) {
        super(account, cart, searchObj, customerId);
    }
    addProduct(product: Product): void {
        // Implementation
    }
}

class Buyer extends User {
    orderObj: Order;

    constructor(account: Account, cart: ShoppingCart, searchObj: Search, customerId: number, orderObj: Order) {
        super(account, cart, searchObj, customerId);
        this.orderObj = orderObj;
    }
    addReview(review: ProductReview): void {
        // Implementation
    }
    placeOrder(cart: ShoppingCart): OrderStatus {
        // Implementation
        return OrderStatus.PACKED;
    }
}

class Account {
    name: string;
    email: string;
    phoneNumber: string;
    userName: string;
    password: string;
    shippingAdresses: Address[];
    accountStatus: AccountStatus;

    constructor(name: string, email: string, phoneNumber: string, userName: string, password: string, shippingAdresses: Address[], accountStatus: AccountStatus) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.userName = userName;
        this.password = password;
        this.shippingAdresses = shippingAdresses;
        this.accountStatus = accountStatus;
    }
}

class Address {
    pinCode: number; // Changed from String to number based on common practice for zip codes
    street: string;
    city: string;
    state: string;
    country: string;

    constructor(pinCode: number, street: string, city: string, state: string, country: string) {
        this.pinCode = pinCode;
        this.street = street;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

enum AccountStatus {
    ACTVE = "ACTVE",
    BLOCKED = "BLOCKED",
    INACTIVE = "INACTIVE",
}

class ShoppingCart {
    items: Item[];
    cartValue: number;

    constructor() {
        this.items = [];
        this.cartValue = 0;
    }

    addItem(item: Item): void {
        this.items.push(item);
        this.cartValue += item.product.cost * item.qty;
    }
    updateItem(item: Item): void {
        // Implementation
    }
    deleteItem(item: Item): void {
        // Implementation
    }
    checkoutItems(): void {
        // Implementation
    }
    getItems(): Item[] {
        return this.items;
    }
    getCartValue(): number {
        return this.cartValue;
    }
}

class Item {
    product: Product;
    qty: number;

    constructor(product: Product, qty: number) {
        this.product = product;
        this.qty = qty;
    }
}

class Product {
    productId: number;
    productDescription: string;
    name: string;
    productCategory: ProductCategory;
    seller: Seller;
    cost: number;
    productReviews: ProductReview[];

    constructor(productId: number, productDescription: string, name: string, productCategory: ProductCategory, seller: Seller, cost: number) {
        this.productId = productId;
        this.productDescription = productDescription;
        this.name = name;
        this.productCategory = productCategory;
        this.seller = seller;
        this.cost = cost;
        this.productReviews = [];
    }
}

enum ProductCategory {
    ELECTRONICS = "ELECTRONICS",
    FURNITURE = "FURNITURE",
    GROCERY = "GROCERY",
    MOBILE = "MOBILE",
}

class ProductReview {
    details: string;
    reviewer: Buyer;
    rating: number;

    constructor(details: string, reviewer: Buyer, rating: number) {
        this.details = details;
        this.reviewer = reviewer;
        this.rating = rating;
    }
}

class Search { // Renamed from 'search' to 'Search' for PascalCase convention in TypeScript classes
    searchByName(name: string): Product[] {
        // Implementation
        return [];
    }
    searchByCategory(productCategory: ProductCategory): Product[] {
        // Implementation
        return [];
    }
}

class Order {
    orderId: number;
    orderItem: Item[];
    orderValue: number;
    buyer: Buyer;
    orderDate: Date;
    notificationService: NotificationService;
    orderLog: OrderLog[];

    constructor(orderId: number, orderItem: Item[], orderValue: number, buyer: Buyer, orderDate: Date, notificationService: NotificationService) {
        this.orderId = orderId;
        this.orderItem = orderItem;
        this.orderValue = orderValue;
        this.buyer = buyer;
        this.orderDate = orderDate;
        this.notificationService = notificationService;
        this.orderLog = [];
    }

    placeOrder(): OrderStatus {
        // Implementation
        return OrderStatus.PACKED;
    }
    trackOrder(): OrderStatus {
        // Implementation
        return OrderStatus.ENROUTE;
    }
    addOrderLogs(): void {
        // Implementation
    }
    makePayment(paymentType: PaymentType): PaymentStatus {
        // Implementation
        return PaymentStatus.SUCCESS;
    }
}

enum OrderStatus {
    PACKED = "PACKED",
    SHIPPED = "SHIPPED",
    ENROUTE = "ENROUTE",
    OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED",
}

enum PaymentStatus {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    CANCELLED = "CANCELLED",
    REFUND_INITIATED = "REFUND_INITIATED",
    REFUNDED = "REFUNDED",
}

enum PaymentType {
    CREDIT_CARD = "CREDIT_CARD",
    DEBIT_CARD = "DEBIT_CARD",
    NET_BANKING = "NET_BANKING",
    UPI = "UPI",
}

class OrderLog {
    orderDetail: string;
    createdDate: Date;
    status: OrderStatus;

    constructor(orderDetail: string, createdDate: Date, status: OrderStatus) {
        this.orderDetail = orderDetail;
        this.createdDate = createdDate;
        this.status = status;
    }
}

enum NotificationType { // Inferred from usage in NotificationService
    EMAIL = "EMAIL",
    WHATSAPP = "WHATSAPP",
    SMS = "SMS",
}

class NotificationDomain {
    notificationID: string;
    notificationType: NotificationType;
    user: User;

    constructor(notificationID: string, notificationType: NotificationType, user: User) {
        this.notificationID = notificationID;
        this.notificationType = notificationType;
        this.user = user;
    }
}

class MessageAttribute { // Renamed from MessageAttributes to MessageAttribute for singular context
    to: string;
    from: string;
    message: string;

    constructor(to: string, from: string, message: string) {
        this.to = to;
        this.from = from;
        this.message = message;
    }
}

interface Notification {
    sendNotification(messageAttribute: MessageAttribute): boolean;
}

class EmailNotification implements Notification {
    sendNotification(messageAttribute: MessageAttribute): boolean {
        // Implementation
        console.log(`Sending email to ${messageAttribute.to} from ${messageAttribute.from}: ${messageAttribute.message}`);
        return true;
    }
}

class WhatsappNotification implements Notification {
    sendNotification(messageAttribute: MessageAttribute): boolean {
        // Implementation
        console.log(`Sending WhatsApp to ${messageAttribute.to} from ${messageAttribute.from}: ${messageAttribute.message}`);
        return true;
    }
}

class SMSNotification implements Notification {
    sendNotification(messageAttribute: MessageAttribute): boolean {
        // Implementation
        console.log(`Sending SMS to ${messageAttribute.to} from ${messageAttribute.from}: ${messageAttribute.message}`);
        return true;
    }
}

class NotificationService {
    sendNotification(notificationDomain: NotificationDomain): boolean {
        let notificationObject: Notification;
        let messageAttribute: MessageAttribute;
        // Assuming Account class has an email and phoneNumber property
        // Also assuming User has a getAccount() method or account property is public
        // I'll make the account property public for simplicity in this example

        let toAddress = "";
        let fromAddress = ""; // Placeholder for 'from' address
        let message = "Order Detail ..."; // Placeholder for message

        // Attempt to get user's account details for 'to' address
        if (notificationDomain.user && notificationDomain.user.account) {
            fromAddress = "noreply@amazon.com"; // Default from address
            switch (notificationDomain.notificationType) {
                case NotificationType.EMAIL:
                    toAddress = notificationDomain.user.account.email;
                    break;
                case NotificationType.WHATSAPP:
                case NotificationType.SMS:
                    toAddress = notificationDomain.user.account.phoneNumber;
                    break;
            }
        }

        messageAttribute = new MessageAttribute(toAddress, fromAddress, message);


        switch (notificationDomain.notificationType) {
            case NotificationType.EMAIL:
                notificationObject = new EmailNotification();
                // messageAttribute = new MessageAttribute("abc@abc.com", notificationDomain.user.account.email, "Order Detail ...");
                break;
            case NotificationType.WHATSAPP:
                notificationObject = new WhatsappNotification();
                // messageAttribute = new MessageAttribute("9888888888", notificationDomain.user.account.phoneNumber, "Order Detail ...");
                break;
            default: // Default to SMS if type is not recognized or missing
                notificationObject = new SMSNotification();
                // messageAttribute = new MessageAttribute("988888888", notificationDomain.user.account.phoneNumber, "Order Detail ...");
                break;
        }

        return notificationObject.sendNotification(messageAttribute);
    }
}
