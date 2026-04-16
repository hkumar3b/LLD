class Library {
    name: string;
    location: Address;
    book: Books[];
    constructor(name: string, location: Address, book: Books[]) {
        this.name = name;
        this.location = location;
        this.book = book;
    }
}
class Address {
    pinCode: string;
    street: string;
    city: string;
    state: string;
    country: string;

    constructor(pincode: string, street: string, city: string, state: string, country: string) {
        this.pinCode = pincode;
        this.street = street;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}
class Books {
    title: string;
    authors: Author[];
    booktype: BookType;
    isbn: string;

    constructor(title: string, authors: Author[], booktype: BookType, isbn: string) {
        this.title = title;
        this.authors = authors;
        this.booktype = booktype;
        this.isbn = isbn;
    }
}
class BookItem extends Books {
    barCode: string;
    publicationDate: Date;
    rackLocation: Rack;
    bookStatus: BookStatus;
    bookFormat: BookFormat;
    issueDate: Date;

    constructor(title: string, authors: Author[], booktype: BookType, isbn: string, barCode: string, publicationDate: Date, rackLocation: Rack, bookStatus: BookStatus, bookFormat: BookFormat, issueDate: Date) {
        super(title, authors, booktype, isbn);
        this.barCode = barCode;
        this.publicationDate = publicationDate;
        this.rackLocation = rackLocation;
        this.bookStatus = bookStatus;
        this.bookFormat = bookFormat;
        this.issueDate = issueDate;
    }
}

class Rack {
    position: number;
    positionId: string;

    constructor(position: number, positionId: string) {
        this.positionId = positionId;
        this.position = position;
    }
}

class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Author extends Person {
    booksPublished: Books[];

    constructor(firstName: string, lastName: string, booksPublished: Books[]) {
        super(firstName, lastName);
        this.booksPublished = booksPublished;
    }
}

class SystemUser extends Person {
    email: string;
    phoneNumber: string;
    account: Account;

    constructor(firstName: string, lastName: string, email: string, phoneNumber: string, account: Account) {
        super(firstName, lastName);
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.account = account;
    }
}

class Member extends SystemUser {
    totalBookCheckOut: number;
    searchObj: Search;
    issueService: BookIssueService;

    constructor(firstName: string, lastName: string, email: string, phoneNumber: string, account: Account, totalBookCheckOut: number, searchObj: Search, issueService: BookIssueService) {
        super(firstName, lastName, email, phoneNumber, account);
        this.totalBookCheckOut = totalBookCheckOut;
        this.searchObj = searchObj;
        this.issueService = issueService;
    }
}

class Librarian extends SystemUser {
    searchObj: Search;
    issueService: BookIssueService;

    constructor(firstName: string, lastName: string, email: string, phoneNumber: string, account: Account, searchObj: Search, issueService: BookIssueService) {
        super(firstName, lastName, email, phoneNumber, account);
        this.searchObj = searchObj;
        this.issueService = issueService;
    }
    addBookItem(bookItem: BookItem): void {

    }
    removeBookItem(bookItem: BookItem): void {

    }
    editBookItem(bookItem: BookItem): void {

    }
}

class Account {
    userName: string;
    password: string;
    accountId: string;

    constructor(userName: string, password: string, accountId: string) {
        this.userName = userName;
        this.password = password;
        this.accountId = accountId;
    }
}

class Search {
    getBookbyTitle(title: string): Books[] {
        return [];
    }
    getBookbyAuthour(author: Author): Books[] {
        return [];
    }
    getBookbyBookType(bookType: BookType): Books[] {
        return [];
    }
    getBookbyPublicationDate(publicationDate: Date): Books[] {
        return [];
    }
}

class BookIssueService {
    fineService: FineService;

    constructor(fineService: FineService) {
        this.fineService = fineService;
    }

    getReservationDetails(BookItem: BookItem): BookReservationDetail {
        return {} as BookReservationDetail;
    }

    updateReservationDetails(bookReservationDetails: BookReservationDetail): void {

    }

    reserveBook(BookItem: Books, SystemUser: SystemUser): BookReservationDetail {
        return {} as BookReservationDetail;
    }

    issueBook(BookItem: Books, SystemUser: SystemUser): BookIssueDetail {
        return {} as BookIssueDetail;
    }

    returnBook(BookItem: Books, SystemUser: SystemUser): void {

    }
}

class BookLending {
    book: BookItem;
    startDate: Date;
    user: SystemUser;

    constructor(book: BookItem, startDate: Date, user: SystemUser) {
        this.book = book;
        this.startDate = startDate;
        this.user = user;
    }
}

class BookReservationDetail extends BookLending {
    reservationStatus: BookReservationStatus;

    constructor(book: BookItem, startDate: Date, user: SystemUser, reservationStatus: BookReservationStatus) {
        super(book, startDate, user);
        this.reservationStatus = reservationStatus;
    }
}

class BookIssueDetail extends BookLending {
    dueDate: Date;

    constructor(book: BookItem, startDate: Date, user: SystemUser, dueDate: Date) {
        super(book, startDate, user);
        this.dueDate = dueDate;
    }
}

class FineService {
    calculateFine(bookItem: Books, user: SystemUser, days: number): Fine {
        return {} as Fine;
    }
}

class Fine {
    amount: number;
    fineDate: Date;
    book: BookItem;
    fineValue: number;
    constructor(amount: number, fineDate: Date, book: BookItem, fineValue: number) {
        this.amount = amount;
        this.fineDate = fineDate;
        this.book = book;
        this.fineValue = fineValue;
    }
}

enum BookReservationStatus {
    PENDING = 'PENDING',
    ACTIVE = 'ACTIVE',
    CANCELLED = 'CANCELLED',
    EXPIRED = 'EXPIRED',
}

enum BookFormat {
    HARDCOVER = 'HARDCOVER',
    PAPERBACK = 'PAPERBACK',
    NEWSPAPER = 'NEWSPAPER',
    JOURNAL = 'JOURNAL',
}

enum BookStatus {
    ISSUED = 'ISSUED',
    AVAILABLE = 'AVAILABLE',
    RESERVED = 'RESERVED',
    LOST = 'LOST',
}

enum BookType {
    SCI_FI = 'SCI_FI',
    ROMANTIC = 'ROMANTIC',
    FANTASY = 'FANTASY',
    DRAMA = 'DRAMA',
}