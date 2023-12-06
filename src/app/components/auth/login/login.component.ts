import { CommonService } from './../../../shared/service/common.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: UntypedFormGroup;
  public registerForm: UntypedFormGroup;
  public active = 1;

  constructor(private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private commonService: CommonService,
  ) {
    this.createLoginForm();
    this.createRegisterForm();
  }
  
  terms: boolean = false;

  ngOnInit(): void {}

  onSubmit() {}

  owlcarousel = [
    {
      title: "Welcome to Multikart",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Welcome to Multikart",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Welcome to Multikart",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    }
  ]
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    })
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
    })
  }

  checkDisabled() {
    if (this.terms === true) {
      return false;
    }
    return true;
  }

  userLogin: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };

  onSubmitLogin() {
    this.authService.login(this.userLogin, null).subscribe(
      () => {
        this.commonService.getDiaban();
      },
      (error) => {
        this.commonService.toastrError("Đăng nhập thất bại: " + error);
      }
    );
  }
}
