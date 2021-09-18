import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../services/datastore.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public carTypes: string[] = ['CAR', 'TRUCK'];

  constructor(private dataStoreService: DatastoreService) { }

  ngOnInit(): void {
  }

  public updateType(value: string) {
    console.log(value);
  }

}
