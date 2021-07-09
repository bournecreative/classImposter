import Vehicle from "./vehicle";

class Car extends Vehicle {
    constructor(license, model, latLong) {
        super(license, model, latLong);
        // this 2 props are unique to car so they are not passed to the
        // parent class vehicle
        this.miles = null;
        this.make = null;
    }
}

export default Car;