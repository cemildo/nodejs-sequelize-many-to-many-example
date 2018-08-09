import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public menus: any[];
  constructor() { }

  ngOnInit() {
    this.menus = [
      {
        route: ['.', 'all'],
        icon: 'person',
        text: 'All'
      },
      {
        route: ['.', 'add'],
        icon: 'person',
        text: 'Add'
      },
      {
        route: ['.', 'assign'],
        icon: 'person',
        text: 'Assign'
      }
    ]
  }

}
