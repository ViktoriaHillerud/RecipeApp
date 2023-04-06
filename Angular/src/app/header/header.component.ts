import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn: any;

constructor(private authService: AuthService, private route: Router) {
}

  ngOnInit(): void {
    this.userLoggedIn = this.readLocalStorage();
    console.log(this.userLoggedIn);
    }


    public readLocalStorage() {
      if (localStorage.getItem('token')){
        
        return true;
      }else  {
        
        return false;
      }
    }


    logOutUser() {
      this.authService.logoutUser().subscribe(response => {
        localStorage.clear();
        response = this.route.navigate(['/login']).then(() => {
          window.location.reload();
        });
      })
     }

    
     
}
