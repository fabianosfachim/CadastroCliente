import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { IAuth, IAuthResponse } from './../../models/IAuth';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userAuthForm: FormGroup = new FormGroup({
    email: new FormControl(null, []),
    password: new FormControl(null, [])
  });

  constructor(private title: Title, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle('Alsofer - Login');
    localStorage.clear();
  }

  login(authDto: IAuth) {
    this.service.auth(authDto).subscribe((user: IAuthResponse) => {
      if (user.data.loginModel.id > 0) {
        localStorage.setItem('alsoferUser', JSON.stringify(user.data.loginModel));
        this.router.navigate(['dashboard']);
      }
    }, (err: any) => {
      Swal.fire({
        title: 'Atenção',
        text: 'Usuario ou senha incorretos.',
        icon: 'warning'
      });
    });
  }
}
