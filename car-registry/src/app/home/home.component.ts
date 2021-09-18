import { Component, OnInit } from '@angular/core';
import { AddNewCar, MatMenuListItem, ViewRegistry } from '../models/mat-menu-list-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public menuListItems: MatMenuListItem[];
  private selectedMenuItem: MatMenuListItem = ViewRegistry;

  constructor(private router: Router) {
    console.log('hmmm')
    this.menuListItems = [
      AddNewCar,
      ViewRegistry
    ];
    console.log(this.menuListItems)
  }

  ngOnInit(): void {
  }

  public clickMenuItem(menuItem: MatMenuListItem) {
    console.log(menuItem);
    this.selectedMenuItem = menuItem;
    if (this.selectedMenuItem === AddNewCar) {
      this.router.navigateByUrl('/add-new-car')
    } else if (this.selectedMenuItem === ViewRegistry) {
      this.router.navigateByUrl('/view-registry')
    } else {
      this.router.navigateByUrl('/home')
    }
  }

}
