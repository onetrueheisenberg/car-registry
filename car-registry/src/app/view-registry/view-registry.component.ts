import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Car } from '../models/car.model';
import { DatastoreService } from '../services/datastore.service';

@Component({
  selector: 'app-view-registry',
  templateUrl: './view-registry.component.html',
  styleUrls: ['./view-registry.component.css']
})
export class ViewRegistryComponent implements OnInit {

  private carsSubscription: Subscription;
  public cars: Car[];
  public displayedColumns: string[] = [];
  public isExtendedView: boolean = false;
  public views: string[] = ['Basic View', 'Extended View'];
  public searchForm: FormGroup;
  public searchFormSubscription: Subscription;

  constructor(private dataStoreService: DatastoreService) { }

  ngOnInit(): void {
    this.carsSubscription = this.dataStoreService.cars$.subscribe((value) => {
      console.log(value);
      this.cars = value;
    });
    this.initForm();
  }

  public updateView(view: string) {
    this.isExtendedView = (view === 'Extended View') ? true: false;
    if (this.isExtendedView) {
      this.displayedColumns = ['type', 'model', 'color', 'license number', 'owner name', 'capacity'];
    } else {
      this.displayedColumns = ['type', 'model', 'color', 'license number'];
    }
  }

  private initForm(): void {
    this.searchForm = new FormGroup({
      'search': new FormControl('')
    });
    this.searchFormSubscription = this.searchForm.valueChanges.subscribe(value => {
      // this.car = this.mapFormFieldsToObject(value);
      // this.areAllFieldsFilled = this.checkIfAllFieldsAreFilled(this.car);
      console.log(value)
    });
  }

}
