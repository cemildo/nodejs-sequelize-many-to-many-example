import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: any;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: ['.', 'dashboard'], title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: ['.', 'teachers'], title: 'Teachers',  icon: 'accessibility', class: '' },
    { path: ['.', 'students'], title: 'Students',  icon: 'person', class: '' },
    { path: ['.', 'classes'], title: 'Classes',  icon: 'person', class: '' },
    { path: ['.', 'user-profile'], title: 'User Profile',  icon: 'person', class: '' },
    { path: ['.', 'table-list'], title: 'Table List',  icon: 'content_paste', class: '' },
    { path: ['.', 'typography'], title: 'Typography',  icon: 'library_books', class: '' },
    { path: ['.', 'icons'], title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: ['.', 'maps'], title: 'Maps',  icon: 'location_on', class: '' },
    { path: ['.', 'notifications'], title: 'Notifications',  icon: 'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
