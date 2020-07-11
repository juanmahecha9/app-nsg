import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-batalla',
  templateUrl: './batalla.component.html',
  styleUrls: ['./batalla.component.scss'],
})
export class BatallaComponent implements OnInit {
  userx;
  constructor(private user: AuthService) {}

  ngOnInit(): void {
    this.user.private().subscribe(
      res =>{
      this.userx = res
      console.log(this.userx)
     },
      err => console.log(err)
    )
  }
}
