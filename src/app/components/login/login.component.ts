import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    try {
      await this.userService.login(this.user).then(res=>{
        console.log(res);
        this.router.navigate(['/blog/post1']);
      });
    }catch(error){
      console.log(error);
    }
  }
  loginWithGoogle(){
    this.userService.loginwithGoogle().then(res=>{
      console.log(res);
      this.router.navigate(['/blog/post1']);
    });
  }
  loginWithFacebook(){
    this.userService.loginwithFacebook().then(res=>{
      console.log(res);
      this.router.navigate(['/blog/post1']);
    });
  }
  loginWithGithub(){
    this.userService.loginwithGithub().then(res=>{
      console.log(res);
      this.router.navigate(['/blog/post1']);
    });
  }

}
