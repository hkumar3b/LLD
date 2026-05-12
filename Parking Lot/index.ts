class ParkingLot {
    parkingFloors: ParkingFloor[];
    entrances: Entrance[];
    exits: Exit[];
    address: Address;
    parkingLotName: string;

    constructor(parkingFloors: ParkingFloor[], entrances: Entrance[], exits: Exit[], address: Address, parkingLotName: string) {
        this.parkingFloors = parkingFloors;
        this.entrances = entrances;
        this.exits = exits;
        this.address = address;
        this.parkingLotName = parkingLotName;
    }

    isParkingSpaceAvailableForVehicle(vehicle: Vehicle): boolean {
        return false;
    }
    
    updateParkingAttendant(parkingAttendant: ParkingAttendant, gateId: number): boolean {
        return false;
    }
}

class ParkingFloor {
    levelId: number;
    parkingSpaces: ParkingSpace[];
    parkingDisplayBoard: ParkingDisplayBoard;

    constructor(levelId: number, parkingSpaces: ParkingSpace[], parkingDisplayBoard: ParkingDisplayBoard) {
        this.levelId = levelId;
        this.parkingSpaces = parkingSpaces;
        this.parkingDisplayBoard = parkingDisplayBoard;
    }
}

class Gate {
    gateId: number;
    parkingAttendant: ParkingAttendant;

    constructor(gateId: number, parkingAttendant: ParkingAttendant) {
        this.gateId = gateId;
        this.parkingAttendant = parkingAttendant;
    }
}

class Entrance extends Gate {
    getParkingTicket(vehicle: Vehicle): ParkingTicket {
        return null as any;
    }
}

class Exit extends Gate {
    payForParking(parkingTicket: ParkingTicket, paymentType: PaymentType): ParkingTicket {
        return null as any;
    }
}

class Address {
    country: string;
    state: string;
    city: string;
    street: string;
    pinCode: string;

    constructor(country: string, state: string, city: string, street: string, pinCode: string) {
        this.country = country;
        this.state = state;
        this.city = city;
        this.street = street;
        this.pinCode = pinCode;
    }
}

class ParkingSpace {
    spaceId: number;
    isFree: boolean;
    costPerHour: number;
    vehicle: Vehicle;
    parkingSpaceType: ParkingSpaceType;

    constructor(spaceId: number, isFree: boolean, costPerHour: number, vehicle: Vehicle, parkingSpaceType: ParkingSpaceType) {
        this.spaceId = spaceId;
        this.isFree = isFree;
        this.costPerHour = costPerHour;
        this.vehicle = vehicle;
        this.parkingSpaceType = parkingSpaceType;
    }
}

class ParkingDisplayBoard {
    freeSpotsAvailableMap: Map<ParkingSpaceType, number>;

    constructor(freeSpotsAvailableMap: Map<ParkingSpaceType, number>) {
        this.freeSpotsAvailableMap = freeSpotsAvailableMap;
    }

    updateFreeSpotsAvailable(parkingSpaceType: ParkingSpaceType, spaces: number): void {
        this.freeSpotsAvailableMap.set(parkingSpaceType, spaces);
    }
}

class Account {
    name: string;
    email: string;
    password: string;
    empId: string;
    address: Address;

    constructor(name: string, email: string, password: string, empId: string, address: Address) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.empId = empId;
        this.address = address;
    }
}

class Admin extends Account {
    addParkingFloor(parkingLot: ParkingLot, floor: ParkingFloor): boolean {
        return false;
    }
    
    addParkingSpace(floor: ParkingFloor, parkingSpace: ParkingSpace): boolean {
        return false;
    }
    
    addParkingDisplayBoard(floor: ParkingFloor, parkingDisplayBoard: ParkingDisplayBoard): boolean {
        return false;
    }
}

class ParkingAttendant extends Account {
    paymentService: Payment;

    constructor(name: string, email: string, password: string, empId: string, address: Address, paymentService: Payment) {
        super(name, email, password, empId, address);
        this.paymentService = paymentService;
    }

    processVehicleEntry(vehicle: Vehicle): boolean {
        return false;
    }
    
    processPayment(parkingTicket: ParkingTicket, paymentType: PaymentType): PaymentInfo {
        return null as any;
    }
}

class Vehicle {
    licenseNumber: string;
    vehicleType: VehicleType;
    parkingTicket: ParkingTicket;
    paymentInfo: PaymentInfo;

    constructor(licenseNumber: string, vehicleType: VehicleType, parkingTicket: ParkingTicket, paymentInfo: PaymentInfo) {
        this.licenseNumber = licenseNumber;
        this.vehicleType = vehicleType;
        this.parkingTicket = parkingTicket;
        this.paymentInfo = paymentInfo;
    }
}

class ParkingTicket {
    ticketId: number;
    levelId: number;
    spaceId: number;
    vehicleEntryDateTime: Date;
    vehicleExitDateTime: Date;
    parkingSpaceType: ParkingSpaceType;
    totalCost: number;
    parkingTicketStatus: ParkingTicketStatus;

    constructor(
        ticketId: number, levelId: number, spaceId: number,
        vehicleEntryDateTime: Date, vehicleExitDateTime: Date,
        parkingSpaceType: ParkingSpaceType, totalCost: number,
        parkingTicketStatus: ParkingTicketStatus
    ) {
        this.ticketId = ticketId;
        this.levelId = levelId;
        this.spaceId = spaceId;
        this.vehicleEntryDateTime = vehicleEntryDateTime;
        this.vehicleExitDateTime = vehicleExitDateTime;
        this.parkingSpaceType = parkingSpaceType;
        this.totalCost = totalCost;
        this.parkingTicketStatus = parkingTicketStatus;
    }

    updateTotalCost(): void {}
    
    updateVehicleExitTime(vehicleExitDateTime: Date): void {
        this.vehicleExitDateTime = vehicleExitDateTime;
    }
}

enum PaymentType {
    CASH = 'CASH',
    CREDIT_CARD = 'CREDIT_CARD',
    DEBIT_CARD = 'DEBIT_CARD',
    UPI = 'UPI'
}

enum ParkingSpaceType {
    BIKE_PARKING = 'BIKE_PARKING',
    CAR_PARKING = 'CAR_PARKING',
    TRUCK_PARKING = 'TRUCK_PARKING'
}

class Payment {
    makePayment(parkingTicket: ParkingTicket, paymentType: PaymentType): PaymentInfo {
        return null as any;
    }
}

class PaymentInfo {
    amount: number;
    paymentDate: Date;
    transactionId: number;
    parkingTicket: ParkingTicket;
    paymentStatus: PaymentStatus;

    constructor(amount: number, paymentDate: Date, transactionId: number, parkingTicket: ParkingTicket, paymentStatus: PaymentStatus) {
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.transactionId = transactionId;
        this.parkingTicket = parkingTicket;
        this.paymentStatus = paymentStatus;
    }
}

enum VehicleType {
    BIKE = 'BIKE',
    CAR = 'CAR',
    TRUCK = 'TRUCK'
}

enum ParkingTicketStatus {
    PAID = 'PAID',
    ACTIVE = 'ACTIVE'
}

enum PaymentStatus {
    UNPAID = 'UNPAID',
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    DECLINED = 'DECLINED',
    CANCELLED = 'CANCELLED',
    REFUNDED = 'REFUNDED'
}
