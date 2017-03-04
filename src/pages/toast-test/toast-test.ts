import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/*
  Generated class for the ToastTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-toast-test',
  templateUrl: 'toast-test.html'
})
export class ToastTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastTestPage');
  }

  showToast(position: string) {
      let toast = this.toastCtrl.create({
        message: 'Mmmm, buttered toast',
        duration: 2000,
        position: position
      });

      toast.present(toast);
    }

    showToastWithCloseButton() {
      const toast = this.toastCtrl.create({
        message: 'Your files were successfully saved',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present();
    }

    showLongToast() {
      let toast = this.toastCtrl.create({
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
        duration: 2000,
      });
      toast.present();
    }

}
