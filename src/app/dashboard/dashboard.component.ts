import { Component, OnInit } from '@angular/core';
import { single, chart } from './data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  single: any[];
   chart  : any[];

  constructor() {Object.assign(this, { single,chart}) }

  ngOnInit() {
  }

}
