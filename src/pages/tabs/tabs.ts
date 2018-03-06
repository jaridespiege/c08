import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular/util/events';
import { NavController } from 'ionic-angular/navigation/nav-controller';

import { Tabs } from 'ionic-angular/components/tabs/tabs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
@ViewChild(Tabs) tabs: Tabs;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    private navCtrl:NavController,
    private events:Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad tabsPage');

    this.events.subscribe("tabsNavigateToAbout",(pizza)=> {
     // this.navCtrl.push(AboutPage);

     console.log("Tabs nav event ", pizza);
      this.tabs.select(1)
      .then(()=> {
        this.events.publish("addPizzaToCart",pizza);
      });

      
    })
  }

}
