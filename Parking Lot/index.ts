class ParkingLot{
    parkingFloors:ParkingFloor[];
    enterance:Enterance[];
    exit:Exit[];
    address:Address;
    constructor(parkingFloors:ParkingFloor[],enterance:Enterance[],exit:Exit[],address:Address){
        this.parkingFloors=parkingFloors;
        this.enterance=enterance;
        this.exit=exit;
        this.address=address;
    }

    parkingLotAvailableForVehicle(vehicle:Vehicle):boolean{
    }
    updateParkingAttendant(parkingAttendant:ParkingAttendant,gateID:string):boolean{
    }
    
}

class ParkingFloor{
    levelId:number;
    isFull:boolean;
    parkingSpace:ParkingSpace[];
    parkingDisplayBoard:ParkingDisplayBoard;
    constructor(levelId:number,isFull:boolean,parkingSpace:ParkingSpace[],parkingDisplayBoard:ParkingDisplayBoard){
        this.levelId=levelId;
        this.isFull=isFull;
        this.parkingSpace=parkingSpace;
        this.parkingDisplayBoard=parkingDisplayBoard;
    }
}

class Gate{
    gateId:string;
    parkingAttendent:ParkingAttendent;
    constructor(gateId:string,parkingAttendent:ParkingAttendent){
        this.gateId=gateId;
        this.parkingAttendent=parkingAttendent;
    }
}

class Enterance extends Gate{
    constructor(gateId:string,parkingAttendent:ParkingAttendent){
        super(gateId,parkingAttendent);
    }
    getParkingTicket(vehicle:Vehicle):ParkingTicket{
    }
}

class Exit extends Gate{
    constructor(gateId:string,parkingAttendent:ParkingAttendent){
        super(gateId,parkingAttendent);
    }
    processPayment(parkingTicket:ParkingTicket):void{
    }
}

class ParkingSpace{
    spaceId:string;
    vehicle:Vehicle;
    vehicleType:VehicleType;
    costPerHour:number;
    isAvailable:boolean;
    constructor(spaceId:string,vehicle:Vehicle,vehicleType:VehicleType,costPerHour:number,isAvailable:boolean){
        this.spaceId=spaceId;
        this.vehicle=vehicle;
        this.vehicleType=vehicleType;
        this.costPerHour=costPerHour;
        this.isAvailable=isAvailable;
    }
}

class ParkingDisplayBoard{
    freeSlotAvilableMap:Map<ParkingSpaceType,number>;
    constructor(freeSlotAvilableMap:Map<ParkingSpaceType,number>){
        this.freeSlotAvilableMap=freeSlotAvilableMap;
    }
    updateParkingSpaceBoard(parkingSpaceType:ParkingSpaceType):void{
        
    }
}

class Account{
    name:string;
    email:string;
    password:string;
    empId:string;
    address:Address;
    constructor(name:string,email:string,password:string,empId:string,address:Address){
        this.name=name;
        this.email=email;
        this.password=password;
        this.empId=empId;
        this.address=address;
    }
}

class Admin extends Account{
    addParkingFloor():boolean{
        
    }
    addParkingSpace(parkingSpace:ParkingSpace):boolean{
        
    }
    addParkingDisplayBoard(parkingDisplayBoard:ParkingDisplayBoard):boolean{
        
    }
    addEntrance(entrance:Enterance):boolean{
        
    }
    addExit(exit:Exit):boolean{
        
    }
    removeParkingFloor(parkingFloor:ParkingFloor):boolean{
        
    }
    removeParkingSpace(parkingSpace:ParkingSpace):boolean{
        
    }
    removeParkingDisplayBoard(parkingDisplayBoard:ParkingDisplayBoard):boolean{
        
    }
    removeEntrance(entrance:Enterance):boolean{
        
    }
    removeExit(exit:Exit):boolean{
        
    }
}

class Vehicle{
    liscenseNumber:string;
    vehicleType:VehicleType;
    parkingTicket:ParkingTicket;
    paymaentInfo:PaymentInfo;
    
    constructor(liscenseNumber:string,vehicleType:VehicleType,parkingTicket:ParkingTicket,paymaentInfo:PaymentInfo){
        this.liscenseNumber=liscenseNumber;
        this.vehicleType=vehicleType;
        this.parkingTicket=parkingTicket;
        this.paymaentInfo=paymaentInfo;
    }
}

class ParkingTicket{
    ticketId:number;
    levelId:number;
    spaceId:number;
    vechileEntryTime:Date;
    vechileExitTime:Date;
    parkingSpaceType:ParkingSpaceType;
    totalParkingTime:Date;
    parkingFees:number;
    parkingTicketStatus:ParkingTicketStatus;
    
    constructor(ticketId:number,levelId:number,spaceId:number,vechileEntryTime:Date,vechileExitTime:Date,totalParkingTime:Date,parkingFees:number){
        this.ticketId=ticketId;
        this.levelId=levelId;
        this.spaceId=spaceId;
        this.vechileEntryTime=vechileEntryTime;
        this.vechileExitTime=vechileExitTime;
        this.totalParkingTime=totalParkingTime;
        this.parkingFees=parkingFees;
    }
    updateTotalCost():void{

    }
    updateVehicleExitTime(vechileExitTime:Date):void{
        
    }
}

class PaymentInfo{
    amount:number;
    paymentDate:Date;
    paymentType:PaymentType;
    transactionId:string;
    paymentStatus:PaymentStatus;
    constructor(amount:number,paymentDate:Date,paymentType:PaymentType,transactionId:string,paymentStatus:PaymentStatus){
        this.amount=amount;
        this.paymentDate=paymentDate;
        this.paymentType=paymentType;
        this.transactionId=transactionId;
        this.paymentStatus=paymentStatus;
    }
}

enum VehicleType{
    CAR='CAR',
    TRUCK='TRUCK',
    VAN='VAN'
}

enum ParkingTicketStatus{
    PAID='PAID',
    UNPAID='UNPAID'
}
enum PaymentStatus{
    SUCCESS='SUCCESS',
    FAILED='FAILED'
    DECLINED='DECLINED'
    PENDING='PENDING'
}
