import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {
    email:"",
    password:"",
    password2:"",
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private AuthService:AuthServiceProvider,
    private toastCtrl:ToastController
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {
    if (this.user.password==this.user.password2) {
      this.AuthService.register(this.user.email,this.user.password)
      .then(()=>{
        if(this.AuthService.isRegisterSucces) {
          this.AuthService.isRegisterSucces=false;
          this.navCtrl.pop()
        }
      })
      ;
    } else {
      this.presentToast("passwords need to be identical");
    }
   
  }
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast',message);
    });
  
    toast.present();
  }
}
