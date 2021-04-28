import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <p>Success !! </p>
  `,
  styles: [`
    p {
      padding:20px;
      background-color: green;
      border: 1px solid green;
    }
  `]
  // templateUrl: './success-alert.component.html',
  // styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
