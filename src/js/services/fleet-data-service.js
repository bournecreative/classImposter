import Car from "../components/car";
import Drone from "../components/drone";
import dataError from "./data-error";

class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(data) {
        for (let item of data) {
            switch (item.type) {
                case 'car':
                    // we dont want to push raw data, we want to push car objects
                    if (this.validateDate(item)) {
                        let car = this.loadCar(item)
                        if (car) {
                            this.cars.push(car)
                        }
                    } else {
                        let e = new dataError('invalid car data', item)
                        this.errors.push(e)
                    }
                    break;
                case 'drone':
                    let drone = this.loadDrone(item)
                    this.drones.push(drone)
                    break;
                default:
                    let e = new dataError("Invalid vehicle type", data)
                    this.errors.push(e)
            }
        }
    }

    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong)
            c.miles = car.miles;
            c.make = car.make;
            return c
        }
        catch {
            this.errors.push(new dataError('error loading car', car))
        }
        return null
    }

    loadDrone(drone) {
        let d = new Drone(drone.license, drone.model, drone.latLong)
        d.airTimeHours = drone.airTimeHours;
        d.base = drone.base;
        return d
    }

    validateDate(car) {
        const requiredProps = 'license make model latLong miles'.split(" ");
        let noErrors = true;
        for (let field of requiredProps) {
            if (!car[field]) {
                let e = new dataError(`invalid property ${field}`, car)
                noErrors = false
            }
            return noErrors
        }
    }

    getCarByLicense(license) {
        return this.cars.find((car) => {
            return car.license === license
        })
    }

    getSortedCars() {
        return this.cars.sort((a, b) => {
            if (a.license < b.license)
                return -1
            if (a.license > b.license)
                return 1
            return 0

        })
    }

    filterByMake(filter) {
        return this.cars.filter(car => {
            return car.make.indexOf(filter) >= 0;
        })
    }
}

export default FleetDataService;