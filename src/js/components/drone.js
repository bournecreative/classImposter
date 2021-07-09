import Vehicle from "./vehicle";

class Drone extends Vehicle {
    constructor(license, model, latLong) {
        super(license, model, latLong);
        // this 2 props are unique to drone so they are not passed to the
        // parent class Vehicle
        this.airTimeHours = null;
        this.base = null;
    }
}

export default Drone;