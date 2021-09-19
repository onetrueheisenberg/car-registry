import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Car, CAR_INIT } from '../models/car.model';
import { DatastoreService } from '../services/datastore.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public carTypes: string[] = ['CAR', 'TRUCK'];
  public colors: string[] = ['RED', 'WHITE', 'BLUE'];

  private carSubscription: Subscription;
  public car: Car = CAR_INIT;
  public isTruck: boolean = false;
  public areAllFieldsFilled: boolean = false;
  public addCarForm: FormGroup;
  public carFormSubscription: Subscription;

  constructor(private dataStoreService: DatastoreService) { }

  ngOnInit(): void {
    this.carSubscription = this.dataStoreService.car$.subscribe((data) => {
      this.car = data;
    });
    this.initForm(this.car);
  }

  public updateType(value: string) {
    console.log(value);
    this.dataStoreService.updateType(value);
  }

  public updateColor(color: string) {
    console.log(color);
    this.dataStoreService.updateColor(color);
  }

  public addNewCar() {
    this.dataStoreService.addNewCar(this.car);
  }

  public checkIfAllFieldsAreFilled(car: Car): boolean {
    if (car === null 
        || car === undefined 
        || car.color === null || car.color === undefined 
        || car.type === null || car.type === undefined 
        || car.licenseNumber === 0 
        || car.model === null || car.model === undefined
        || (car.type ==='TRUCK' && (car.capacity === null || car.capacity === undefined))) {
      return false;
    }
    else {
      return true;
    }
  }

  public mapFormFieldsToObject(jsonFormValue: any): Car {
    let newCar: Car = CAR_INIT;
    newCar.type = jsonFormValue['car-type'];
    newCar.color = jsonFormValue['car-color'];
    newCar.capacity = jsonFormValue['car-capacity'];
    newCar.model = jsonFormValue['car-model'];
    newCar.licenseNumber = jsonFormValue['car-license-number'];
    newCar.owner = jsonFormValue['car-owner'];
    return newCar;
  }

  private initForm(car: Car): void {
    this.addCarForm = new FormGroup({
      'car-type': new FormControl(car.type, [Validators.required]),
      'car-color': new FormControl(car.color, [Validators.required]),
      'car-model': new FormControl(car.model, [Validators.required]),
      'car-license-number': new FormControl(car.licenseNumber, [Validators.required, Validators.min(0), Validators.max(999999999999)]),
      'car-capacity': new FormControl(car.capacity),
      'car-owner': new FormControl(car.owner)
    });
    this.carFormSubscription = this.addCarForm.valueChanges.subscribe(value => {
      this.car = this.mapFormFieldsToObject(value);
      this.areAllFieldsFilled = this.checkIfAllFieldsAreFilled(this.car);
    });
  }

}
