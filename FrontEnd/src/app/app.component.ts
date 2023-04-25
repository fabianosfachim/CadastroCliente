import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  hasAuth: boolean = false;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.isAuthenticated.subscribe((isAuthenticated: boolean) => {
      this.hasAuth = isAuthenticated;
    });
  }
}
