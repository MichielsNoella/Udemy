import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>', // ipv gebruik te maken van de html pagina alles op één lijn
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`, // door gebruik te maken van `` mag alles op meerdere lijnen komen
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
