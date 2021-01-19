import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username : String;
  constructor(private _usrService : UserService) { 
    
  }

  ngOnInit(): void {
    this.username = JSON.parse(this._usrService.isLoggedIn()).name;
    console.log(this.username)
   
  }
  isLogin()
  { 
    return this._usrService.isLoggedIn();
  }
  isMenuCollapsed = true
  logout(){
    localStorage.removeItem('usr')
  }
}
