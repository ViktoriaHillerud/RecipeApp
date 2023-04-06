import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
values: any;


registerForm: FormGroup;
err: any = null;
  

  constructor(private authService: AuthService, public fb: FormBuilder, public route: Router) { 
     this.registerForm = this.fb.group({
      name: [''],
       email: [],
       password: [],
       password_confirmation: []
     })
 }


     onSubmit() {
      this.authService.registerUser(this.registerForm.value).subscribe((result)=> {
       result = this.route.navigate(['/login']).then(() => {
        window.location.reload();
      });
       
      },
     (error: { error: any; }) => {
     this.err = error.error;
     })
  
   }
}
