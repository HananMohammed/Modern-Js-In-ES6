//in JS functions are objects -and it is inherit the 
//behavior of the object 

//whenever you create an object the prototype object is created behind the scene

function Holiday(destination, days){
    this.destination = destination;
    this.days = days;
}
console.log(Holiday.prototype)
Holiday.prototype.info = function(){
    console.log(this.destination + "| " + this.days +"days");
}

var nepal2  = new Holiday("Nepal", 30);

console.log(nepal2.info())


//Create  Classes In ES6
class HolidayClass{
    constructor(destination, days){

        this.destination = destination;
        this.days = days;
    
    }
    info(){
        console.log(`${this.destination} Will take ${this.days }  days`)
    }

}

const trip = new HolidayClass("Alex, Sharm ", 40)

console.log(trip.info())


//Extend From One Class To another Class
//So Child Class can extend from parent class so that
//all properties an methods from parent are available to child class

//sub class can

class Expeditation extends HolidayClass {
    constructor(destination, days, gear){
        //calling parent class and passing argument to parent class

        super(destination, days);
        this.gear = gear ;
    }

    info(){

        super.info();
        console.log(`Bring Your ${this.gear.join(" and Your ")}`)

    }

}

const tripWithGear = new Expeditation("Everest", "30", ["Sunglasses" , "Camera" ,"Flags"])
tripWithGear.info();































