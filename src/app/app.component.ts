import { Component } from '@angular/core';
import {CounterService} from "./app.counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  private counter : string = 'Click on the button to get hit count';
  title = 'Counter API';
  constructor(private service : CounterService) {}

  public increaseCounter() {
    this.service.hitCounter().subscribe(data =>{
      this.counter = JSON.stringify(data['value']);
    })
  }
}
