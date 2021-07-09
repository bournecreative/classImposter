import Car from "./components/car";
import Drone from "./components/drone";
import { fleet } from "./fleet-data";
import dataError from "./services/data-error";
import FleetDataService from "./services/fleet-data-service";


let dataService = new FleetDataService();

dataService.loadData(fleet);

const search = dataService.getCarByLicense('AT9900')

console.log(search)

const sortedCars = dataService.getSortedCars();

console.log(sortedCars)

const Lyft = dataService.filterByMake('L')

console.log(Lyft)