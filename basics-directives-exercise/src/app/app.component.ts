import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-directives-exercise';
  showSecretPassword = false;
  log = [];

  onToggleDetails() {
    this.showSecretPassword = !this.showSecretPassword;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }
}
