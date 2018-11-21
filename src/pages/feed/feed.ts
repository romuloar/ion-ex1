import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario: string = "Rom Rib";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * name
   */
  public somaDoisNumeros() : void{
    //alert("Funcionou!!:"+ (5 + 30));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.somaDoisNumeros();
  }

}
