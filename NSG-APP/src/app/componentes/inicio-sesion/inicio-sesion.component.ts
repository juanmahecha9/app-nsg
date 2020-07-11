import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.inicio(this.user)
      .subscribe(
        res => {
          //console.log(res);
          alert('inico de sesion')
          localStorage.setItem('token', res.token);
          this.router.navigate(['/USER']);
        },
        err => {
          alert('Inicio de sesion erroneo, vuelva a intentar')
          console.log(err)
         
        }
       
      )
  }

}
