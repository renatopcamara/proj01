import {Component} from '@angular/core';
import 'rxjs/Rx'
import {BackandService} from '../../providers/backandService'

@Component({
  templateUrl: 'signup.html',
  selector: 'page-signup',
})
export class SignupPage {

  email:string = 'teste@teste.com';
  firstName:string = 'primeiro';
  lastName:string = 'segundo';
  signUpPassword: string = '1';
  confirmPassword: string = '1';

  constructor(private backandService:BackandService) {


  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }

    var $obs = this.backandService.signup(this.email, this.signUpPassword, this.confirmPassword, this.firstName, this.lastName);
    $obs.subscribe(
      data => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      err => {
          this.backandService.logError(err)
      },
      () => console.log('Finish Auth'));
  }

  public socialSignin(provider) {
    var $obs = this.backandService.socialSignin(provider);
    $obs.subscribe(
        data => {
            console.log('Sign up succeeded with:' + provider);
        },
        err => {
            this.backandService.logError(err)
        },
        () => console.log('Finish Auth'));
  }

  public inAppSocial(provider) {
    var $obs = this.backandService.inAppSocial(provider);
    $obs.subscribe(
        data => {
            console.log('Sign up succeeded with:' + provider);
        },
        err => {
            this.backandService.logError(err)
        },
        () => console.log('Finish Auth'));
  }
}
