import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angForm1: any) {
    this.dataService.userregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },

        error => {
        });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
}
