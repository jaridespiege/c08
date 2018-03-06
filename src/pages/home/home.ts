import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Events } from 'ionic-angular/util/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pizza={
    title:"Pizza1",
    toppings: [{
      id:1,
      name:"pineapple"
    }, {
      id:4,
      name:"mushrooms"
    }
  
  ]

  }
  constructor(
    public navCtrl: NavController,
    private events:Events
  
  ) {

  }


about () {
  this.events.publish("tabsNavigateToAbout",this.pizza)
 // navigate to other tab using parent (only works when this is a tab)
  //this.navCtrl.parent.select(1);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad homePage');
}

}
