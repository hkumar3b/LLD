class Hotel {
    name: string;
    id: number;
    hotelLocation: HotelLocation;
    roomList: Room[];

    constructor(name: string, id: number, hotelLocation: HotelLocation, roomList: Room[] = []) {
        this.name = name;
        this.id = id;
        this.hotelLocation = hotelLocation;
        this.roomList = roomList;
    }
}

class HotelLocation {
    longitude: number;
    latitude: number;

    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
}

class Room {
    roomNumber: string;
    roomStyle: RoomStyle;
    roomStatus: RoomStatus;
    bookingPrice: number;
    roomKeys: RoomKey[];
    houseKeepingLogs: HouseKeepingLog[];

    constructor(
        roomNumber: string,
        roomStyle: RoomStyle,
        roomStatus: RoomStatus,
        bookingPrice: number,
        roomKeys: RoomKey[] = [],
        houseKeepingLogs: HouseKeepingLog[] = []
    ) {
        this.roomNumber = roomNumber;
        this.roomStyle = roomStyle;
        this.roomStatus = roomStatus;
        this.bookingPrice = bookingPrice;
        this.roomKeys = roomKeys;
        this.houseKeepingLogs = houseKeepingLogs;
    }
}

class RoomKey {
    keyId: string;
    barCode: string;
    issuedAt: Date;
    isActive: boolean;
    isMaster: boolean;

    constructor(keyId: string, barCode: string, issuedAt: Date, isActive: boolean, isMaster: boolean) {
        this.keyId = keyId;
        this.barCode = barCode;
        this.issuedAt = issuedAt;
        this.isActive = isActive;
        this.isMaster = isMaster;
    }

    assignRoom(room: Room): void {
        // assign this key to the given room
    }
}

class HouseKeepingLog {
    description: string;
    startDate: Date;
    duration: number;
    housekeeper: HouseKeeper;

    constructor(description: string, startDate: Date, duration: number, housekeeper: HouseKeeper) {
        this.description = description;
        this.startDate = startDate;
        this.duration = duration;
        this.housekeeper = housekeeper;
    }

    addRoom(room: Room): void {
        // add room to this housekeeping log
    }
}

class Account {
    username: string;
    password: string;
    accountStatus: AccountStatus;

    constructor(username: string, password: string, accountStatus: AccountStatus) {
        this.username = username;
        this.password = password;
        this.accountStatus = accountStatus;
    }
}

abstract class Person {
    name: string;
    accountDetail: Account;
    phone: string;

    constructor(name: string, accountDetail: Account, phone: string) {
        this.name = name;
        this.accountDetail = accountDetail;
        this.phone = phone;
    }
}

class HouseKeeper extends Person {
    getRoomsServiced(date: Date): Room[] {
        // return list of rooms serviced on the given date
        return [];
    }
}

class Guest extends Person {
    searchObj?: Search;
    bookingObj?: Booking;

    getAllRoomBookings(): RoomBooking[] {
        // return all bookings for this guest
        return [];
    }

    createBooking(): RoomBooking {
        // create a new booking
        return {} as RoomBooking;
    }

    cancelBooking(bookingId: number): RoomBooking {
        // cancel the booking with the given id
        return {} as RoomBooking;
    }
}

class Receptionist extends Person {
    searchObj?: Search;
    bookingObj?: Booking;

    checkInGuest(guest: Guest, bookingInfo: RoomBooking): void {
        // check-in logic
    }

    checkOutGuest(guest: Guest, bookingInfo: RoomBooking): void {
        // check-out logic
    }
}

class Admin extends Person {
    addRoom(roomDetail: Room): void {
        // add a room
    }

    deleteRoom(roomId: string): Room {
        // delete a room by id
        return {} as Room;
    }

    editRoom(roomDetail: Room): void {
        // edit room details
    }
}


class Search {
    searchRoom(roomStyle: RoomStyle, startDate: Date, duration: number): Room[] {
        // search rooms matching criteria
        return [];
    }
}

class RoomBooking {
    bookingId: string;
    startDate: Date;
    durationInDays: number;
    bookingStatus: BookingStatus;
    guestList: Guest[];
    roomInfo: Room[];
    totalRoomCharges: BaseRoomCharge;

    constructor(
        bookingId: string,
        startDate: Date,
        durationInDays: number,
        bookingStatus: BookingStatus,
        guestList: Guest[] = [],
        roomInfo: Room[] = [],
        totalRoomCharges: BaseRoomCharge
    ) {
        this.bookingId = bookingId;
        this.startDate = startDate;
        this.durationInDays = durationInDays;
        this.bookingStatus = bookingStatus;
        this.guestList = guestList;
        this.roomInfo = roomInfo;
        this.totalRoomCharges = totalRoomCharges;
    }
}

class Booking {
    createBooking(guestInfo: Guest): RoomBooking {
        // create a booking for the guest
        return {} as RoomBooking;
    }

    cancelBooking(bookingId: number): RoomBooking {
        // cancel the booking
        return {} as RoomBooking;
    }
}

interface BaseRoomCharge {
    getCost(): number;
    setCost?(cost: number): void;
}

class RoomCharge implements BaseRoomCharge {
    private cost: number = 0;

    getCost(): number {
        return this.cost;
    }

    setCost(cost: number): void {
        this.cost = cost;
    }
}

class RoomServiceCharge implements BaseRoomCharge {
    private cost: number;
    private baseRoomCharge: RoomCharge;

    constructor(cost: number, baseRoomCharge: RoomCharge) {
        this.cost = cost;
        this.baseRoomCharge = baseRoomCharge;
    }

    getCost(): number {
        this.baseRoomCharge.setCost(this.baseRoomCharge.getCost() + this.cost);
        return this.baseRoomCharge.getCost();
    }
}

class InRoomPurchaseCharges implements BaseRoomCharge {
    private cost: number;
    private baseRoomCharge: RoomCharge;

    constructor(cost: number, baseRoomCharge: RoomCharge) {
        this.cost = cost;
        this.baseRoomCharge = baseRoomCharge;
    }

    getCost(): number {
        this.baseRoomCharge.setCost(this.baseRoomCharge.getCost() + this.cost);
        return this.baseRoomCharge.getCost();
    }
}

enum RoomStyle {
    STANDARD = "STANDARD",
    DELUX = "DELUX",
    FAMILY_SUITE = "FAMILY_SUITE",
}

enum RoomStatus {
    AVAILABLE = "AVAILABLE",
    RESERVED = "RESERVED",
    NOT_AVAILBLE = "NOT_AVAILBLE",
    OCCUPIED = "OCCUPIED",
    SERVICE_IN_PROGRESS = "SERVICE_IN_PROGRESS",
}

enum AccountStatus {
    ACTIVE = "ACTIVE",
    CLOSED = "CLOSED",
    BLOCKED = "BLOCKED",
}

enum BookingStatus {
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED",
    PENDING = "PENDING",
}