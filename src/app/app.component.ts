import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService:UserService) {}

  userActivated=false;
  ngOnInit() {
    this.userService.activatedEmitter.subscribe(didActivated =>
      {
        this.userActivated=didActivated;
      })

  }
}
