import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userx;
  
  constructor(private user: AuthService) { }

  ngOnInit(): void {
    this.user.private().subscribe(
      res =>{
      this.userx = res
      console.log(this.userx)
     },
      err => console.log(err)
    );
  }

}
