import { Component, OnInit } from '@angular/core';
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

  constructor(private dataStoreService: DatastoreService) { }

  ngOnInit(): void {
    this.carsSubscription = this.dataStoreService.cars$.subscribe((value) => {
      console.log(value);
      this.cars = value;
    });
  }

  public updateView(view: string) {
    this.isExtendedView = (view === 'Extended View') ? true: false;
    if (this.isExtendedView) {
      this.displayedColumns = ['type', 'model', 'color', 'license number', 'owner name', 'capacity'];
    } else {
      this.displayedColumns = ['type', 'model', 'color', 'license number'];
    }
  }

}
