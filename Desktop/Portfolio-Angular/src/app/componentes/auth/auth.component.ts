import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form: FormGroup;
  loginError: boolean = false;

  constructor(private authService: LoginService, private router: Router, private formBuilder: FormBuilder) {

    this.form = formBuilder.group(
      {
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]]
      }
     )
   }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault;

    this.authService.login(this.form.value).subscribe(
      (response: Boolean) => {
        if (response)
        this.router.navigate(['/home']);
        else 
        this.loginError = true;
      }
    );
  }

  get Email() {
    return this.form.get('email'); 
  }

  get Password() {
    return this.form.get('password');
  }



}
