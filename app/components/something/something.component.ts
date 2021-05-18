import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {
  number: number = 100;
  code = 'ILS';
  aaa='hello';
  bbb='ABCD';
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
