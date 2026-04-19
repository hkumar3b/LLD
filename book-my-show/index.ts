class BMSService {
    cinemas: CinemaHall[];
    constructor(cinemas: CinemaHall[]) {
        this.cinemas = cinemas;
    }
    getMovies(city: string, date: Date): Movie[] {
        return [];
    }
    getCinemaHalls(city: string): CinemaHall[] {
        return [];
    }

}

class CinemaHall {
    cinemaHallId: number;
    cinemaHallName: string;
    address: Address;
    audiList: Audi[];

    constructor(cinemaHallId: number, cinemaHallName: string, address: Address, audiList: Audi[]) {
        this.cinemaHallId = cinemaHallId;
        this.cinemaHallName = cinemaHallName;
        this.address = address;
        this.audiList = audiList;
    }

    getMovies(dateList: Date[]): Map<Movie, Date> {
        return new Map();
    }
    getShows(dateList: Date[]): Map<Shows, Date> {
        return new Map();
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

class Audi {
    audiId: number;
    audiName: string;
    totalSeat: number;
    shows: Shows[];

    constructor(audiId: number, audiName: string, totalSeat: number, shows: Shows[]) {
        this.audiId = audiId;
        this.audiName = audiName;
        this.totalSeat = totalSeat;
        this.shows = shows;
    }
}

class Shows {
    showId: number;
    startTime: Date;
    endTime: Date;
    movie: Movie;
    cinemaPlayedAt: CinemaHall;
    seats: Seat[];

    constructor(showId: number, startTime: Date, endTime: Date, movie: Movie, cinemaPlayedAt: CinemaHall, seats: Seat[]) {
        this.showId = showId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.movie = movie;
        this.cinemaPlayedAt = cinemaPlayedAt;
        this.seats = seats;
    }
}

class Seat {
    seatId: number;
    seatType: SeatType;
    seatStatus: SeatStatus;
    price: number;

    constructor(seatId: number, seatType: SeatType, seatStatus: SeatStatus, price: number) {
        this.seatId = seatId;
        this.seatType = seatType;
        this.seatStatus = seatStatus;
        this.price = price;
    }
}

enum SeatType {
    GOLD,
    SILVER,
    PLATINUM,
    DIAMOND
}

enum SeatStatus {
    AVAILABLE,
    BOOKED,
    BLOCKED
}

class Movie {
    movieName: string;
    movieId: number;
    durationInMins: number;
    language: string;
    genre: Genre;
    relaseDate: Date;
    cityShowMap: Map<string, Shows[]>;

    constructor(movieName: string, movieId: number, durationInMins: number, language: string, genre: Genre, relaseDate: Date, cityShowMap: Map<string, Shows[]>) {
        this.movieName = movieName;
        this.movieId = movieId;
        this.durationInMins = durationInMins;
        this.language = language;
        this.genre = genre;
        this.relaseDate = relaseDate;
        this.cityShowMap = cityShowMap;
    }
}

enum Genre {
    SCI_FI,
    ACTION,
    COMEDY,
    DRAMA,
    HORROR,
    ROMANCE,
    THRILLER,
    MYSTERY,
    FANTASY,
    ADVENTURE,
    ANIMATION,
    BIOGRAPHY,
    DOCUMENTARY,
    FAMILY,
    HISTORY,
    MUSIC,
    MUSICAL,
    SPORT,
    WESTERN,
    UNKNOWN
}

class User {
    userId: number;
    searchObj: Search;
    constructor(userId: number, searchObj: Search) {
        this.userId = userId;
        this.searchObj = searchObj;
    }
}

class SystemMember extends User {
    account: Account;
    name: string;
    email: string;
    address: Address;
    constructor(userId: number, searchObj: Search, account: Account, name: string, email: string, address: Address) {
        super(userId, searchObj);
        this.account = account;
        this.name = name;
        this.email = email;
        this.address = address;
    }
}

class Member extends SystemMember {
    constructor(userId: number, searchObj: Search, account: Account, name: string, email: string, address: Address) {
        super(userId, searchObj, account, name, email, address);
    }
    makeBooking(booking: Booking): Booking {
        return booking;
    }
    getBooking(bookingId: number): Booking {
        return new Booking();
    }
    cancelBooking(bookingId: number): Booking {
        return new Booking();
    }
}

class Admin extends SystemMember {
    constructor(userId: number, searchObj: Search, account: Account, name: string, email: string, address: Address) {
        super(userId, searchObj, account, name, email, address);
    }
    addMovie(movie: Movie): boolean {
        return true;
    }
    addShow(show: Shows): boolean {
        return true;
    }
}

class Account {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

class Search {
    getMovieSearchByName(name: string): Movie[] {
        return [];
    }
    getMovieSearchByCity(city: string): Movie[] {
        return [];
    }
    getMovieSearchByDate(date: Date): Movie[] {
        return [];
    }
    getMovieSearchByGenre(genre: Genre): Movie[] {
        return [];
    }
    getMovieSearchByLanguage(language: string): Movie[] {
        return [];
    }
}

class Booking {
    bookingId?: number;
    bookingDate?: Date;
    member?: Member;
    show?: Shows;
    audi?: Audi;
    bookingStatus?: BookingStatus;
    seat?: Seat[];
    paymentObj?: Payment;
    constructor(bookingId?: number, bookingDate?: Date, member?: Member, show?: Shows, audi?: Audi, bookingStatus?: BookingStatus, seat?: Seat[], paymentObj?: Payment) {
        this.bookingId = bookingId;
        this.bookingDate = bookingDate;
        this.member = member;
        this.show = show;
        this.audi = audi;
        this.bookingStatus = bookingStatus;
        this.seat = seat;
        this.paymentObj = paymentObj;
    }
    makePayment(payment: Payment): boolean {
        return true;
    }
    cancelBooking(): boolean {
        return true;
    }
}

enum BookingStatus {
    PENDING,
    CONFIRMED,
    CANCELLED,
    FAILED
}

class Payment {
    amount: number;
    paymentDate: Date;
    transactionId: string;
    paymentStatus: PaymentStatus;
    constructor(amount: number, paymentDate: Date, transactionId: string, paymentStatus: PaymentStatus) {
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.transactionId = transactionId;
        this.paymentStatus = paymentStatus;
    }
}
enum PaymentStatus {
    PENDING,
    SUCCESS,
    FAILED,
    REFUNDED
}