import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car, CAR_INIT } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  private car = new BehaviorSubject<Car>(CAR_INIT);
  public car$ = this.car.asObservable();

  private cars = new BehaviorSubject<Car[]>([CAR_INIT]);
  public cars$ = this.cars.asObservable();

  constructor() { }

  public updateType(type: string) {
    const updatedCarStore= {
      ...this.car.value
    };
    updatedCarStore.type = type === 'CAR' ? 'CAR': 'TRUCK';
    this.car.next(updatedCarStore);
  }

  public updateColor(color: string) {
    const updatedCarStore= {
      ...this.car.value
    };
    updatedCarStore.color = (color === 'RED'? 'RED': (color === 'WHITE'? 'WHITE': 'BLUE'));
    this.car.next(updatedCarStore);
  }

  public updateModel(model: string) {
    const updatedCarStore= {
      ...this.car.value
    };
    updatedCarStore.model = model;
    this.car.next(updatedCarStore);
  }

  public updateLicenseNumber(licenseNumber: number) {
    const updatedCarStore= {
      ...this.car.value
    };
    updatedCarStore.licenseNumber = licenseNumber;
    this.car.next(updatedCarStore);
  }

  public updateOwner(owner: string) {
    const updatedCarStore= {
      ...this.car.value
    };
    updatedCarStore.owner = owner;
    this.car.next(updatedCarStore);
  }

  public updateCapacity(capacity: number) {
    const updatedCarStore= {
      ...this.car.value
    };
    updatedCarStore.capacity = capacity;
    this.car.next(updatedCarStore);
  }

  public addNewCar(car: Car): void {
    // this.cars.value.push(car);
    this.updateCarsArray(car);
  }

  public updateCarsArray(car: Car) {
    const updatedCarsStore= [
      ...this.cars.value
    ];
    updatedCarsStore.push(car);
    this.cars.next(updatedCarsStore);
  }
}
