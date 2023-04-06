import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

   loginForm: FormGroup;
   err: any = null;

   constructor(private authService: AuthService, public fb: FormBuilder, public route: Router) { 
     this.loginForm = this.fb.group({
       email: [],
       password: []
     })
 }

   onSubmit() {
      this.authService.loginUser(this.loginForm.value).subscribe(
        (result: { token: string; })=> 
    {
      localStorage.setItem("token", result.token)
      this.route.navigate(['']).then(() => {
        window.location.reload();
      });
      // this.route.navigate([''])
    },
   (error: { error: any; }) => 
   {
   this.err = error.error;
   })

 }
}
